import { useEffect, useRef, useState } from 'react';
import HelloWorld from './HelloWorld';

const Card = ({ children }) => {
  return (
    <>
      <div className="card">
        {children}
      </div>
    </>
  )
}

const ItemList = ({ list }) => {

  return (
    <>
      <div className="p-4">
        <ul>
          {
            list.map((item, index) => (
              <li key={index}>{item}</li>
            ))
          }
        </ul>
      </div>
    </>
  )
}

const UncontrolledInput = () => {
  const inputRef = useRef(null);

  const handleClick = () => {
    alert(inputRef.current.value);
  }
  
  return (
    <>
      <div className="p-4">
        <label htmlFor="input">Input Ref: </label>
        <input type="text" ref={inputRef} name="input" className="border border black" />

        <button type="submit" onClick={handleClick} className="btn">Submit</button>
      </div>
    </>
  )
}

const LoginForm = () => {
  const [form, setForm] = useState({
    userName: "",
    password: ""
  })

  const handleInput = (event) => {
    const { name, value } = event.target;
    
    setForm((_form) => ({
      ..._form,
      [name] : value
    }))
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();

    alert(`User Name: ${form.userName} Password: ${form.password}`)
    }

  return (
    <>
      <div className="p-4">
        <form onSubmit={handleSubmit}>

          <label htmlFor="userName">User: </label>
          <input type="text" name="userName" value={form.userName} onInput={handleInput} className="border border black" />

          <label htmlFor="password">Password: </label>
          <input type="password" name="password" value={form.password} onInput={handleInput} className="border border black" />
          <button className="btn" type="submit">Submit</button>
        </form>
      </div>
    </>
  )
}

const TextInput = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInput = (event) => {
      const newValue = event.target.value;
      setInputValue(newValue);
  }

  return (
    <div className="p-4">
      <input type="text" className="border border-black" name="inputValue" value={inputValue} onInput={handleInput} />
    </div>
  )
}

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const handleAddClick = () => {
    setCounter((_counter) => {
      return _counter + 1;
    })
  }

  const handleRemoveClick = () => {
    setCounter((_counter) => {
      return _counter - 1;
    })
  }

  const handleResetClick = () => {
    setCounter((_counter) => {
      return _counter = 0;
    })
  }

  useEffect(() => {
    document.title = `Count: ${counter}`;
  }, [counter])


  return (
    <>
      <div className='p-4'>
        <div>Counter: {counter}</div>
        <button className='btn' onClick={handleAddClick}>Add</button>
        <button className='btn' onClick={handleRemoveClick}>Remove</button>
        <button className='btn' onClick={handleResetClick}>Reset</button>
      </div>
    </>
  )
}

const App = () => {

  return (
    <>
      <div className="p-4">
        <HelloWorld />
      </div>

      <div className="divider"></div>

      <Counter />

      <div className="divider"></div>

      <TextInput />

      <div className="divider"></div>

      <LoginForm />

      <div className="divider"></div>

      <UncontrolledInput />

      <div className="divider"></div>

      <ItemList list={["Link 1", "Link 2", "Link 3"]} />

      <div className="divider"></div>

      <Card>
        <h1>Titolo</h1>
        <p>Lorem ipsum dolor sit amet.</p>
      </Card>

    </>
  )
}

export default App;

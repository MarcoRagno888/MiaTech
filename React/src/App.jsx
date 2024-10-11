import { useEffect, useState } from 'react';
import HelloWorld from './HelloWorld';

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

    </>
  )
}

export default App;

import { useState } from 'react';
import HelloWorld from './HelloWorld';

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const handleAddClick = () => {
    setCounter((_counter) => {
      return _counter + 1;
    })
  }
   
  return (
    <>
      <div className='p-4'>
        <div>Counter: {counter}</div>
        <button className='btn' onClick={handleAddClick}>Add</button>
      </div>
    </>
  )
}

const App = () => {

  return (
    <>
      <div class="p-4">
        <HelloWorld />
      </div>

      <div className="divider"></div>

      <Counter />
      
    </>
  )
}

export default App;

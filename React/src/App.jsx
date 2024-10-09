import { useState } from 'react';
import HelloWorld from './HelloWorld';

const Counter = () => {
  const [counter, setCounter] = useState(0);
  
  return (
    <div className='p-4'>Counter: {counter}</div>
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

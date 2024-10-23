import { useEffect, useState } from "react";

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

  export default Counter;
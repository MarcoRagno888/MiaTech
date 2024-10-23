import { useRef } from "react";

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

  export default UncontrolledInput;
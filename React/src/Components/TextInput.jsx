import { useState } from "react";

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

  export default TextInput;
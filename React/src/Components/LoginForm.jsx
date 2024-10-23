import { useState } from "react";

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

  export default LoginForm;
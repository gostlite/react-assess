import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../index.css"



function Input(props) {
    return <div className="form-group">
        <label htmlFor={props.name}>{props.name}:</label>
        <input onChange={props.func} type={props.name === "password" ? "password" : "text"} id={props.name} name={props.name} required />
    </div>
}

export default function LoginComponent() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()


 function handleChange(event) {
     const ele = event.target
     if(ele.name === "username") setUsername(event.target.value);
     if(ele.name === "password") setPassword(event.target.value);
    
  }

    function handleSubmit(event) {
        event.preventDefault();
        if (username === "admin" && password ===
            "admin") {
            return navigate("/dashboard")
        }
  }
    return <div className="login-container">
        <h1>{ username }</h1>
  <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <Input name="username" func={ handleChange} />
            <Input name="password" func={ handleChange} />          
    <button type="submit">Log In</button>
  </form>
</div>

}
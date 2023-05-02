import React from "react";
import "../../index.css"

function Input(props) {
    return <div className="form-group">
      <label for={props.name}>{props.name}:</label>
        <input type={props.name === "password"?"password":"text"} id={props.name} name={props.name} required />
    </div>
}

export default function LoginComponent() {
    return <div class="login-container">
  <form>
    <h2>Login</h2>
    <Input name="username" />
    <Input name="password" />
    
    <button type="submit">Log In</button>
  </form>
</div>

}
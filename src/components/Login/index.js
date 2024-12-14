import React, { useState } from "react";
import { Link } from "react-router-dom";
import './index.css'
const Login = ()=>{
    const [email,setEmail] = useState('')
    const [password ,setPassword] = useState('')
    return(
        <div className="login-container">
            <h1 className="login-heading">Login</h1>

            <input type="text" className="login-input" value={email} onChange={e=>{setEmail(e.target.value)}}
                placeholder="Email"/>

            <input type="text" className="login-input" value={password} onChange={e=>setPassword(e.target.value)}
                placeholder="Password"/>

            <div className="login-middle">
                <div className="d-flex align-items-center gap-1">
                    <input type="checkbox" id="remeber-me"/> <label for="remeber-me" >Remember me</label>
                </div>
                <p className="login-special-link">Forgot password</p>
            </div>
            <button type="submit" className="login-button button"> Login </button>
            <p className="login-bottom">Don't have an account? <span className="login-special-link">Register</span></p>
        </div>
    )
}
export default Login;
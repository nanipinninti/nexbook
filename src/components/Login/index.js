import React, { useState } from "react";
import { Link } from "react-router-dom";
import './index.css'
const Login = ()=>{
    const [email,setEmail] = useState('')
    const [password ,setPassword] = useState('')
    return(
        <div className="login-container">
            <h1>Login</h1>
            <input type="text" className="login-input" value={email} onChange={e=>{setEmail(e.target.value)}}/>
            <input type="text" className="login-input" value={password} onChange={e=>setPassword(e.target.value)}/>
            <div>
                <div>
                    <input type="checkbox"/> <span>Remember me</span>
                </div>
                <p>Forgot password</p>
            </div>
            <button type="submit"> Login </button>
            <p>Don't have an account? <span></span></p>
        </div>
    )
}
export default Login;
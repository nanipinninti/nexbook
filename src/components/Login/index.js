import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import './index.css'
const Login = ()=>{
    const [email,setEmail] = useState('')
    const [errorMsg,setErrorMsg] = useState('')
    const [password ,setPassword] = useState('')
    const [submittedOnce,setSubmittedOnce] = useState(false)
    const navigate = useNavigate()

    const onSubmit = async (event)=>{
        event.preventDefault()
        if (email !== "" && password !==""){
            
        }else{
            setSubmittedOnce(true)
            setErrorMsg("*Enter the missing fields")
        }
    }
    return(
        <div className="login-container">
            <h1 className="login-heading">Login</h1>
            <input type="text" className= {`login-input ${(submittedOnce&& email==="")?'fill-this-field':''}`} 
                value={email} onChange={e=>{setEmail(e.target.value)}}
                    placeholder="Email"/>

            <input type="password" className= {`login-input ${(submittedOnce&& password==="")?'fill-this-field':''}`} 
             value={password} onChange={e=>setPassword(e.target.value)}
                placeholder="Password"/>

            <div className="login-middle">
                <div className="d-flex align-items-center gap-1">
                    <input type="checkbox" id="remeber-me"/> <label for="remeber-me" >Remember me</label>
                </div>
                <p className="login-special-link">Forgot password</p>
            </div>
            <div className="submit-error-block">
                <button type="submit" className="login-button button"
                    onClick = {onSubmit} > Login </button>
                {
                    (errorMsg !== '')?(
                    <p className="error-msg">{errorMsg}</p>
                ):(null)
                }
            </div>
            <p className="login-bottom">Don't have an account? <span className="login-special-link"
                     onClick={()=>navigate("/signup")}
                     >Register</span></p>
        </div>
    )
}
export default Login;
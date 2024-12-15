import React from "react";
import { useState } from "react";

import './index.css'
const Signup = ()=>{
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [number,setNumber]=useState('')
    const [password,setPassword]=useState('')
    const [newPassword,setNewPassword]=useState('')
    



    return(
        <div className="sign-up-bg-container">
           
                
                <form className="sign-up-form-container">
                 <p className="sign-up-heading">Registration</p>
                 <input type="text" value={name} placeholder="Name" onChange={(event) => setName(event.target.value)} className="sign-up-input"/>
                 <input type="email"  value={email} placeholder="Email" onChange={(event)=>setEmail(event.target.value)} className="sign-up-input" />
                 <input type="number" value={number} placeholder="Contact Number" onChange={(event)=>setNumber(event.target.value)} className="sign-up-input"/>
                 <input type="password" value={password} placeholder="Password" onChange={(event) => setPassword(event.target.value)} className="sign-up-input"/>
                 <input type="password" value={newPassword} placeholder="Confirm Password" onChange={(event) => setNewPassword(event.target.value)} className="sign-up-input"/>
                 
                 <button type="submit" className="sign-up-btn">Sign up</button>
                 <p className="sign-up-description">Already have an account?<span> Login</span></p>

                </form>
                
            
        </div>
        
    )
}
export default Signup;
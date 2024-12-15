import React from "react";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './index.css'
const Signup = ()=>{
       const navigate = useNavigate()
       const [name,setName]=useState('')
       const [email,setEmail]=useState('')
       const [contact,setContact]=useState('')
       const [password,setPassword]=useState('')
       const [newPassword,setNewPassword]=useState('')
       const [submittedOnce,setSubmittedOnce] = useState(false)
       const [errorMsg,setErrorMsg] = useState('')

       const check = ()=>{
              // Let's check user name
              if (name.length <=3){
                     setErrorMsg("Name is too short")
                     return false
              }
              // email check
              // Regular expression to validate email format
              const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
              if (!emailRegex.test(email)){
                     setErrorMsg("Incorrect email format")
                     return false
              }
              const phoneRegex = /^[+]?[0-9]{1,4}?[ -]?[(]?[0-9]{1,4}[)]?[ -]?[0-9]{3,4}[ -]?[0-9]{3,4}$/;
              if (!phoneRegex.test(contact)) {
                     setErrorMsg("Invalid Phone number format")
                     return false
              }
              if (password !== newPassword){
                     setErrorMsg("Confirm password not matched")
                     return false
              }
              if (password.length <=6){
                     setErrorMsg("Short password")
                     return false
              }
              return true
       }
       const onSubmit = async (event)=>{
              event.preventDefault()
              if (name!=="" &&email!==""&&contact !=="" && password !=="" &&
                     newPassword !==""){
                     if (check()){
                            
                     }                     
              }else{
                     setSubmittedOnce(true)
                     setErrorMsg("*Enter the missing fields")
              }
       }
return(
       <div className="sign-up-form-container">
              <p className="sign-up-heading">Registration</p>

              <input type="text" value={name} placeholder="Name" onChange={(event) => setName(event.target.value)} 
                     className= {`sign-up-input ${(submittedOnce&& name==="")?'fill-this-field':''}`} />

              <input type="email"  value={email} placeholder="Email" onChange={(event)=>setEmail(event.target.value)}
                     className= {`sign-up-input ${(submittedOnce&& email==="")?'fill-this-field':''}`} />

              <input type="text" value={contact} placeholder="Contact Number" onChange={(event)=>setContact(event.target.value)} 
                     className= {`sign-up-input ${(submittedOnce&& contact==="")?'fill-this-field':''}`}/>

              <input type="password" value={password} placeholder="Password" onChange={(event) => setPassword(event.target.value)} 
                     className= {`sign-up-input ${(submittedOnce&& password==="")?'fill-this-field':''}`}/>

              <input type="password" value={newPassword} placeholder="Confirm Password" onChange={(event) => setNewPassword(event.target.value)}
              className= {`sign-up-input ${(submittedOnce&& newPassword==="")?'fill-this-field':''}`}/>
              
              <div className="submit-error-block">
              <button type="submit" className="sign-up-btn button"
                     onClick={onSubmit}>Sign up</button>
                {
                    (errorMsg !== '')?(
                    <p className="error-msg">{errorMsg}</p>
                ):(null)
                }
            </div>

              <p className="sign-up-description">Already have an account?
              <span onClick={()=>{navigate('/login')}}> Login</span></p>                
       
       </div>
       
)
}
export default Signup;
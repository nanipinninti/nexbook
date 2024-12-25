import React, { useState } from "react";
import { useNavigate,Navigate } from "react-router-dom";
import Cookies from "js-cookie";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import "./index.css";

const Signup = () => {
const navigate = useNavigate();
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [number, setNumber] = useState("");
const [password, setPassword] = useState("");
const [newPassword, setNewPassword] = useState("");
const [errorMsg, setErrorMsg] = useState("");
const [submittedOnce, setSubmittedOnce] = useState(false); // Reintroduced

const [emailError, setEmailError] = useState("");
const [nameError, setNameError] = useState("");
const [numberError, setNumberError] = useState("");
const [passwordError, setPasswordError] = useState("");
const [newPasswordError, setNewPasswordError] = useState("");

if (Cookies.get("login_token")!==undefined) {
       return (<Navigate to={'/'}/>)
       }

const validateName = (value) => {
       if (value.length <= 3) {
       return "Name is too short";
       }
       return "";
};

const validateEmail = (value) => {
       const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
       if (value.length <= 4) {
              return "Too short";
       } else if (!emailRegex.test(value)) {
              return "Incorrect format";
       }
       return "";
};

const validateNumber = (value) => {
const phoneRegex = /^[+]?[0-9]{1,4}?[ -]?[(]?[0-9]{1,4}[)]?[ -]?[0-9]{3,4}[ -]?[0-9]{3,4}$/;
if (!phoneRegex.test(value)) {
return "Invalid Phone number format";
}
return "";
};

const validatePassword = (value) => {
if (value.length <= 6) {
return "Too short password";
}
return "";
};

const validateNewPassword = (value) => {
if (value !== password) {
return "Confirm password not matched";
}
return "";
};

const onSubmit = async (event) => {
       event.preventDefault();
       setSubmittedOnce(true); // Flagging that the user has attempted submission

       const nameErr = validateName(name);
       const emailErr = validateEmail(email);
       const numberErr = validateNumber(number);
       const passwordErr = validatePassword(password);
       const newPasswordErr = validateNewPassword(newPassword);

       // Set all error states
       setNameError(nameErr);
       setEmailError(emailErr);
       setNumberError(numberErr);
       setPasswordError(passwordErr);
       setNewPasswordError(newPasswordErr);

       if (!nameErr && !emailErr && !numberErr && !passwordErr && !newPasswordErr) {
              setErrorMsg("");
            const api = "http://localhost:5001/users/signup"
            const userDetails = {
              name,email,number,password
            }
            const options = {
              method : "POST",
              headers: {
                     "Content-Type": "application/json",  // Add this header
                   },
              body : JSON.stringify(userDetails)
            }
            try{
              const response = await fetch(api,options)
              const data = await response.json()
              if (response.ok){
                     console.log("Succesfully registered");
                     navigate("/login")                     
              }else{
                     setErrorMsg(`*${data.error}!`)
              }
            }catch(error){
              setErrorMsg("Internal servor error!")
            }
       } else {
       setErrorMsg("*Please fill out all fields correctly");
       }
};

    const onGoogleAccountSuccess = async (credentialResponse)=>{
        const details = jwtDecode((credentialResponse.credential))
        console.log(details)
        const {email,name} = details 
        const userDetails ={email,name} 
        const api = "http://localhost:5001/users/login/googleaccess"          
        const options ={
            method : "POST",
            headers: {
                "Content-Type": "application/json", // Add this header
            },
            body : JSON.stringify(userDetails)
        }
        try{
            const responce = await fetch(api,options)
            const data = await responce.json()
            if (responce.ok){
                // console.log("Login success")
                const login_token = data.token
                Cookies.set("login_token",login_token,{ expires : 7})
                navigate('/')
            }
            else{
                // console.log("Login Fail")
                setErrorMsg(`*${data.error}`)
            }
        }catch(error){
            console.error(error)
            setErrorMsg("Internal Servor error!")
        }
}
return (
<div className="sign-up-form-container">
{/* <p className="sign-up-heading">Registration</p> */}
<img src="https://i.postimg.cc/MKb6TcZV/nexbook-bg.jpg" className="login-signup-web-logo" 
            alt="web-logo"/>

{/* Name Input */}
<div className="signup-login-input-total">
       <p className="login-signup-question">Name</p>
       <input
       type="text"
       value={name}
       placeholder="Name"
       onChange={(event) => {
       setName(event.target.value);
       if (submittedOnce) {
       setNameError(validateName(event.target.value));
       }
       }}
       className={`sign-up-input ${nameError ? "fill-this-field" : ""}`}
       />
       {submittedOnce && nameError && (
       <p className="login-signup-field-error">{nameError}</p>
       )}
</div>

{/* Email Input */}
<div className="signup-login-input-total">
       <p className="login-signup-question">Email</p>
       <input
       type="email"
       value={email}
       placeholder="Email"
       onChange={(event) => {
       setEmail(event.target.value);
       if (submittedOnce) {
       setEmailError(validateEmail(event.target.value));
       }
       }}
       className={`sign-up-input ${emailError ? "fill-this-field" : ""}`}
       />
       {submittedOnce && emailError && (
       <p className="login-signup-field-error">{emailError}</p>
       )}
</div>

{/* Phone Number Input */}
<div className="signup-login-input-total">
       <p className="login-signup-question">Phone Number</p>
       <input
       type="text"
       value={number}
       placeholder="Phone Number"
       onChange={(event) => {
       setNumber(event.target.value);
       if (submittedOnce) {
       setNumberError(validateNumber(event.target.value));
       }
       }}
       className={`sign-up-input ${numberError ? "fill-this-field" : ""}`}
       />
       {submittedOnce && numberError && (
       <p className="login-signup-field-error">{numberError}</p>
       )}
</div>

{/* Password Input */}
<div className="signup-login-input-total">
       <p className="login-signup-question">Password</p>
       <input
       type="password"
       value={password}
       placeholder="Password"
       onChange={(event) => {
       setPassword(event.target.value);
       if (submittedOnce) {
       setPasswordError(validatePassword(event.target.value));
       }
       }}
       className={`sign-up-input ${passwordError ? "fill-this-field" : ""}`}
       />
       {submittedOnce && passwordError && (
       <p className="login-signup-field-error">{passwordError}</p>
       )}
</div>

{/* Confirm Password Input */}
<div className="signup-login-input-total">
       <p className="login-signup-question">Confirm Password</p>
       <input
       type="password"
       value={newPassword}
       placeholder="Confirm Password"
       onChange={(event) => {
       setNewPassword(event.target.value);
       if (submittedOnce) {
       setNewPasswordError(validateNewPassword(event.target.value));
       }
       }}
       className={`sign-up-input ${
       newPasswordError ? "fill-this-field" : ""
       }`}
       />
       {submittedOnce && newPasswordError && (
       <p className="login-signup-field-error">{newPasswordError}</p>
       )}
</div>

{/* Submit Button */}
<div className="submit-error-block">
       <button
       type="submit"
       className="sign-up-btn button"
       onClick={onSubmit}
       >
       Sign up
       </button>
       {errorMsg && <p className="error-msg">{errorMsg}</p>}
</div>

<p className="sign-up-description">
       Already have an account?{" "}
       <span onClick={() => navigate("/login")}>Login</span>
</p>

<div className="separator-container">
            <hr className="separator"/>
            <p className="separator-text">OR</p>
            <hr className="separator"/>
        </div>
        <GoogleLogin className="google-container" 
            onSuccess={(credentialResponse)=>{
                onGoogleAccountSuccess(credentialResponse)
            }}
            onError={()=>console.log("Login failed")}        
        >
            {/* <FcGoogle className="google-icon"/>
            <p className="google-text">Continue with Google</p> */}
        </GoogleLogin>
</div>
);
};

export default Signup;

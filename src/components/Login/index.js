    import React, { useState } from "react";
    import { useNavigate,Navigate } from "react-router-dom";
    import Cookies from "js-cookie";
    import './index.css';


    const Login = () => {
    const [email, setEmail] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const [password, setPassword] = useState('');
    const [submittedOnce, setSubmittedOnce] = useState(false);
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const navigate = useNavigate();

    if (Cookies.get("login_token")!==undefined) {
        return (<Navigate to={'/'}/>)
    }

    const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (value.length <= 4) {
        return "Email is too short";
    } else if (!emailRegex.test(value)) {
        return "Incorrect email format";
    }
    return "";
    };

    const validatePassword = (value) => {
    if (value.length <= 6) {
        return "Password is too short";
    }
    return "";
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        setSubmittedOnce(true); // Flag that submission was attempted

        const emailErr = validateEmail(email);
        const passwordErr = validatePassword(password);

        setEmailError(emailErr);
        setPasswordError(passwordErr);

        if (!emailErr && !passwordErr) {
            setErrorMsg("");
            const api = "http://localhost:5000/login"
            const userDetails = {
                email,password
              }
              
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
    
        } else {
            setErrorMsg("*Please fill out all fields correctly");
        }
    };

    return (
    <div className="login-container">
        <h1 className="login-heading">Login</h1>

        <div className="signup-login-input-total">
        <p className="login-signup-question">Email</p>
        <input
            type="text"
            className={`login-input ${submittedOnce && email === "" ? "fill-this-field" : ""}`}
            value={email}
            onChange={e => {
            setEmail(e.target.value);
            if (submittedOnce) {
                setEmailError(validateEmail(e.target.value));
            }
            }}
            placeholder="Email"
        />
        {submittedOnce && emailError && (
            <p className="login-signup-field-error">{emailError}</p>
        )}
        </div>

        <div className="signup-login-input-total">
        <p className="login-signup-question">Password</p>
        <input
            type="password"
            className={`login-input ${submittedOnce && password === "" ? "fill-this-field" : ""}`}
            value={password}
            onChange={e => {
            setPassword(e.target.value);
            if (submittedOnce) {
                setPasswordError(validatePassword(e.target.value));
            }
            }}
            placeholder="Password"
        />
        {submittedOnce && passwordError && (
            <p className="login-signup-field-error">{passwordError}</p>
        )}
        </div>

        <div className="login-middle">
            <div className="d-flex align-items-center gap-1">
                <input type="checkbox" id="remember-me" />
                <label htmlFor="remember-me">Remember me</label>
            </div>
            <p className="login-special-link">Forgot password</p>
        </div>

        <div className="submit-error-block">
            <button type="submit" className="login-button button" onClick={onSubmit}>
                Login
            </button>
            {errorMsg && <p className="error-msg">{errorMsg}</p>}
        </div>

        <p className="login-bottom">
        Don't have an account?{" "}
        <span className="login-special-link" onClick={() => navigate("/signup")}>
            Register
        </span>
        </p>
    </div>
    );
    };

    export default Login;

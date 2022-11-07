import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import './Login.css';

function Login() {
    
    const history = useHistory();
    const [email, setEmail] = useState("");       //setEmail is a function in react that sets the email & initially is an empty string
    const [password, setPassword] = useState("");

    const login = (event) => {
        event.preventDefault();   //prevents page from refreshing
        
        //login logice.lo
        console.log("kkkk",email,password)
        signInWithEmailAndPassword(auth, email, password)
        .then((auth) => {            //logged in successfully, redirect to home page
            history.push("/");         //history keeps track of pages visited so that we can go back to that page
        })
        .catch((e) => alert(e));  //if something went wrong, catch it
    };

    const register = (event) => {
        event.preventDefault();   //prevents page from refreshing
        //register logic
        createUserWithEmailAndPassword(auth, email, password)
        .then(auth => {          //then means when everything went alright
            history.push("/");   //created a user & logged in, redirect to home page
        })
        .catch((e) => alert(e.message))
    };

    return(
        <div className="login">
            <Link to="/">
                <img 
                    className="login_logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                    alt=""
                />
            </Link>
           
           <div className="login_container"> 
                <h1>Sign in</h1>
                <form>
                    <h5>Email</h5>
                    <input value={email} onChange={event => setEmail(event.target.value)} type="email"/>
                    <h5>Password</h5>
                    <input value={password} onChange={event => setPassword(event.target.value)} type="password"/>
                    <button onClick={login} type="submit" className="login_signInButton">Sign In</button>
                </form>
                <p>
                    By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
                </p>
                <button onClick={register} className="login_registerButton">Create your Amazon account</button>
            </div>
        </div>
    );
};

export default Login;
import React from 'react'
import "./Login.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn = e => {
        e.preventDefault();

        // some fancy firebase login shittttt...
    }

    const register = e => {
        e.preventDefault();

        // Do some firebase register shitttt....
    }


    return (
      <div className="login">
        <Link to="/">
          <img
            className="login_logo"
            src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
            alt="amazon-logo"
          />
        </Link>

        <div className="login_container">
          <h1>Sign-in</h1>

          <form action="">
            <h5>E-mail</h5>
            <input type="text"  value={email} onChange=
            {e => setEmail(e.target.value)} />

            <h5>Password</h5>
            <input type="password" value={password}
            onChange={e => setPassword(e.target.value)}
            />

            <button type="submit" onClick={signIn}
            className="login_signInButton">Sign In</button>
          </form>

          <p>
              By signing-in you agree to the  Amazon's Fake Clone Conditions of Use & Sale,
              Please see our Privacy Notice, our Cookies Notice and 
              our Interest-Based Ads Notice.
          </p>

          <button onClick={register} className="login_registerButton "
          >Create your Amazon Account</button>
        </div>
      </div>
    );
}

export default Login

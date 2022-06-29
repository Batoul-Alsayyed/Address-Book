import React from 'react'
import './Login.css';

export default function Login() {
  return (
    <div className='signup-page'>
     
     <div class="center">
            <h1>Login</h1>
            <form action="">
                <div class="txt-field">
                    <input type="text" required id="password"></input>
                    <span></span>
                    <label for="">Email:</label>
                </div>
                <div class="txt-field">
                    <input type="password" required id="password"></input>
                    <span></span>
                    <label for="">Password:</label>
                </div>
                <div class="pass"></div>
                    <input type="button" value="submit" id="submit"></input>
                    <div class="signup_link">
                        Not a member?<a href="../pages/signup.html">Sign up</a> <a href="../index.html">Home</a>
                    </div>
            </form>
        </div>
    </div>
  )
}

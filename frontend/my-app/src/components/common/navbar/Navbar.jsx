import React from 'react';
import './Navbar.css'
import {login} from '../login/Login'
import {register} from '../register/Register'
function Navbar () {
    return (
      <section className="navbar">
        <a href="/" className="navbar-item">Home</a>
        <a href="/login" className="navbar-item">Login</a>
        <a href="/register" className="navbar-item">Register</a>
    </section>
    )
  
  }

export default Navbar;

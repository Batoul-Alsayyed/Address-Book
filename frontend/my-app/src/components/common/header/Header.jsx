import React from 'react';
import { Navbar } from '../../common' ;

import './Header.css';
import logo from '../logo.svg'
function Header () {

  return (
    <section className="header">
      <section className="header-top">
        <section className="header-top__logo">
          <a href="/" className="header-logo">Address Book</a>
        </section>
        <section className="header-top__navbar">
          <section className="header-top__navigation">
            <Navbar />
          </section>
        </section>
      </section>
      <section className="header-bottom">
        <section className='header-buttom-row'>
        <h1>The free and easy way to add contacts.</h1>

        <button>Get Started</button>
        </section>
         <div className='logo'>
            <img src={logo} alt='logo'/>  
         </div>


      </section> 

    </section>
  )
}

export default Header;
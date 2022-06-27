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
        {/* <section className="header-bottom__phone">
          99999999999
        </section>
        <section className="header-bottom__email">
          shop.info@gmail.com
        </section> */}
         <div className='logo'>
            <img src={logo} alt='logo'/>  
         </div>

      </section> 
    </section>
  )
}

export default Header;
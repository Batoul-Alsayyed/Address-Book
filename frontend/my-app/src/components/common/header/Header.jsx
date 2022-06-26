import React from 'react';
import { Navbar } from '../../common';

function Header(){
    return (
        <section className='header'>
            <section className='header-top'>
                <section className='header-top-logo'>
                    <a href='/' className='header-logo'>Address Book</a>
                </section>
                <section className='header-top-navbar'>
                    {<Navbar />}
                </section>
            </section>
            <section className='header-buttom'>
                <section className='header-buttom__phone'>
                    99999999
                </section>
                <section className='header-buttom_email'>
                    contact-us@gmail.com
                </section>
            </section>

        </section>
    );
}
export default Header;
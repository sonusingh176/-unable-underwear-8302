import React from 'react'
import logo from '../Assets/img/KFC-Logo.png'
import '../Header/header.css'


const Header = () => {
  return (
    <div className='headerWrapper'>
        <div className="logo">
            <img src={logo} alt=""/>
        </div>
        <div className="auth-link">
            <ul>
                <li><a href='#'>Store Locator</a></li>
                <li><a href='#'>Signin/Register</a></li>
            </ul>
        </div>

    </div>
  )
}

export default Header
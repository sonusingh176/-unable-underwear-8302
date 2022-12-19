import React from 'react'
import logo from '../Assets/img/KFC-Logo.png'
import '../Header/header.css'
import Menu from '../Menu/menu'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
        <>
        <div className='headerWrapper'>
            <div className="logo">
                <Link to="/"><img src={logo} alt=""/></Link>
            </div>
            <div className="auth-link">
                <ul>
                    {/* <li><a href='#'><i className="bi bi-geo-alt-fill"></i>Store Locator</a></li>
                    <li><a href='#'><i className="bi bi-person-circle"></i>Signin/Register</a></li>
                    <li><a href='#'>My Account</a></li>
                    <li><a href='#'>Logout</a></li> */}

                    {/*Link all components  */}
                    {/* Changes :-  a ->Link  ,href->to*/}

                    <li><Link to='#'><i className="bi bi-geo-alt-fill"></i>Store Locator</Link></li>
                    <li><Link to='#'><i className="bi bi-person-circle"></i>Signin/Register</Link></li>
                    <li><Link to='#'>My Account</Link></li>
                    <li><Link to='#'>Logout</Link></li>
                </ul>
            </div>

        </div>
        <Menu/>
        
        </>
  )
}

export default Header
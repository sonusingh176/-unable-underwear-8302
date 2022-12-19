import React from 'react'
import './footer.css'
import footerLogo from '../Assets/img/footer-logo.png'
import appstore from '../Assets/img/app-store.png'
import playstore from '../Assets/img/google-store.png'



const Footer = () => {
  return (
    <div className='footer-wrapper'>
        <img className='footerLogo' src={footerLogo} alt=""/>

        <div className="row footer-inner">
            <div className="col-md-2">
            <ul>
                    <li><a href=""></a></li>
                    <li><a href="">gg</a></li>
                    <li><a href=""></a></li>
                    <li><a href="">gh</a></li>
                    <li><a href=""></a></li>
                </ul>

            </div>

            <div className="col-md-2">
                <ul>
                    <li><a href=""></a></li>
                </ul>
                
            </div>
             
            <div className="col-md-2">
                <ul>
                    <li><a href="">ff</a></li>
                </ul>
            </div>

            <div className="col-md-2">
                <ul>
                    <li><a href="">ff</a></li>
                </ul>
            </div>


            <div className="col-md-4">

                <ul>
                    <li><a href=""><img src={appstore} alt=""/></a></li>
                    <li><a href=""><img src={playstore} alt=""/></a></li>
                    
                </ul>
                
                
            </div>
        </div>

        <div className="copywrite">
            <p>@ 2022 KFC India. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer
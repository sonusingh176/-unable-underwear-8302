import React from 'react'
import Footer from '../../Components/Footer/footer'
import Header from '../../Components/Header/header'
import {Link} from 'react-router-dom'

const Register = () => {
  return (
    <>
    
    <Header/>

    <div className="lead-text">
        <h3>NEW CUSTOMER</h3>
       </div>

    <div className='register-wrapper pt-2'>
        <p>Already Register <Link to="/login">Login</Link></p>
        
        <hr/>
        <button  className="btn btn-danger d-block w-100 mb-3">Danger</button>
        <button  className="btn btn-primary d-block w-100 ">Primary</button>
        <hr />
        {/* d-block w-100  ---> display block width-100  className */}
            <form className="row g-3">

            <div className="col-md-6">
                <label for="inputEmail4" className="form-label">First Name</label>
                <input type="email" className="form-control" id="inputEmail4"/>
            </div>
            <div className="col-md-6">
                <label for="inputEmail4" className="form-label">Last Name</label>
                <input type="email" className="form-control" id="inputEmail4"/>
            </div>
            <div className="col-md-6">
                <label for="inputEmail4" className="form-label">Email</label>
                <input type="email" className="form-control" id="inputEmail4"/>
            </div>
            <div className="col-md-6">
                <label for="inputPassword4" className="form-label">Password</label>
                <input type="password" className="form-control" id="inputPassword4"/>
            </div>
            <div className="col-12">
                <label for="inputAddress" className="form-label">Address</label>
                <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
            </div>
            <div className="col-12">
                <label for="inputAddress2" className="form-label">Address 2</label>
                <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
            </div>
            <div className="col-md-6">
                <label for="inputCity" className="form-label">City</label>
                <input type="text" className="form-control" id="inputCity"/>
            </div>
            <div className="col-md-4">
                <label for="inputState" className="form-label">State</label>
                <select id="inputState" className="form-select">
                <option selected>Choose...</option>
                <option>...</option>
                </select>
            </div>
            <div className="col-md-2">
                <label for="inputZip" className="form-label">Zip</label>
                <input type="text" className="form-control" id="inputZip"/>
            </div>
            <div className="col-12">
                <div className="form-check">
                <input className="form-check-input" type="checkbox" id="gridCheck"/>
                <label className="form-check-label" for="gridCheck">
                    Check me out
                </label>
                </div>
            </div>
            <div className="col-12">
                <button type="submit" className="btn btn-primary">Register Now</button>
            </div>
            </form>


    </div>
    <Footer/>
    </>
  )
}

export default Register
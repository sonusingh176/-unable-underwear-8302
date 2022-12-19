import React from 'react'
import Footer from '../../Components/Footer/footer'
import Header from '../../Components/Header/header'

const Login = () => {
  return (
    <>
        <Header/>

            <div className='login-wrapper'>
                <div className="row">
                    <div className="col-md-6">
                    <div className="lead-text">
                      <h3>Login with social links</h3>
                    </div>
                    <p>Already Register <a href="">Login</a></p>
        
        <hr/>
        <button  className="btn btn-danger d-block w-100 mb-3">Danger</button>
        <button  className="btn btn-primary d-block w-100 ">Primary</button>
        <hr />
        {/* d-block w-100  ---> display block width-100  className */}
            <form className="row g-3">
            <div className="col-md-12">
                <label for="inputEmail4" className="form-label">Email</label>
                <input type="email" className="form-control" id="inputEmail4"/>
            </div>
            <div className="col-md-12">
                <label for="inputPassword4" className="form-label">Password</label>
                <input type="password" className="form-control" id="inputPassword4"/>
            </div>
            <div className="col-12">
                <button type="submit" className="btn btn-primary">Register Now</button>
            </div>
            </form>


                    </div>
                    <div className="col-md-6">
                        
                    </div>
                </div>


            </div>

        <Footer/>

    </>
    
  )
}

export default Login
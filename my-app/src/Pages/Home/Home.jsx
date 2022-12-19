import React from 'react'
import Footer from '../../Components/Footer/footer'
import Header from '../../Components/Header/header'
import Slider from '../../Components/Slider/slider'
import Card from '../../Components/Card/card'
import './home.css'

const Home = () => {
  return (
    <div className='home-wrapper'>
       <Header/>
       <Slider/>
       
       <div className="lead-text">
        <h3>SIGNATURE BOXES</h3>
       </div>

       <div className="row">
        <div className="col-md-4">
          <Card/>
        </div>

        <div className="col-md-4">
          <Card/>
        </div>

        <div className="col-md-4">
          <Card/>
        </div>

       </div>
       <Footer/>
      </div>
  )
}

export default Home

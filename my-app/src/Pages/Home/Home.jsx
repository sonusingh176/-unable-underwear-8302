import React from 'react'
import Header from '../../Components/Header/header'
import Slider from '../../Components/Slider/slider'
import Card from '../../Components/Card/card'

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
      </div>
  )
}

export default Home

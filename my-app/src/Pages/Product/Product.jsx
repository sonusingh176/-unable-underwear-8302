import React from 'react'
import Header from '../../Components/Header/header'
import Footer from '../../Components/Footer/footer'
import Card from '../../Components/Card/card'

const Product = () => {
  return (
    <div className='product-wrapper'>
    <Header/>

     
    <div className="lead-text">
        <h3>SIGNATURE BOXES</h3>
       </div>


    <div className="product-iner">
        <div className="row">{/* Grid system  bootstrap*/}
            {/*
                col-md-4: This class is used when the device 
                size is medium or greater than 768px and the
                 maximum width of container is 720px and 
                 you want the width equal to 4 columns

                mb-<number> -->margin bottom class--------ex ->mb-4
            */}
            <div className="col-md-4 mb-3">
              <Card/>
            </div>

            <div className="col-md-4 mb-3">
              <Card/>
            </div>

            <div className="col-md-4 mb-3">
              <Card/>
            </div>

            <div className="col-md-4 mb-3">
              <Card/>
            </div>

            <div className="col-md-4 mb-3">
              <Card/>
            </div>

            <div className="col-md-4 mb-3">
              <Card/>
            </div>
          
        </div>  
    </div>  
    


    
    <Footer/>
    </div>
  )
}

export default Product
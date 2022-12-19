import React from 'react'
import Footer from '../../Components/Footer/footer'
import Header from '../../Components/Header/header'
 import pro1 from '../../Components/Assets/img/largeburgar.png'

 

const ProductDetails = () => {
  return (
    <div className='Product-detail-wrapper'>
        <Header/>
        <div className="sub-product-detail pt-5"> {/*pt-<number> -padding top class */}
            <div className="row">
                <div className="col-md-5">
                    <img src={pro1} alt=''/>
                </div>
                <div className="col-md-7">
                    <h1>Product Details</h1>
                    <p>this is product detail section</p>
                </div>
            </div>

        </div>
       
        <Footer/>
    </div>
  )
}

export default ProductDetails
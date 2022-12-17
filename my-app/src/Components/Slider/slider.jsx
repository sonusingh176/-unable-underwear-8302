import React from 'react';
import slider1 from '../Assets/img/Banner1.jpg'
import slider2 from '../Assets/img/Banner2.jpg'
// import slider3 from '../Assets/img/Banner4.jpg'

const Slider = () => {
  return (
    <div className='sliderWrapper'>

<div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={slider1} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={slider2} class="d-block w-100" alt="..."/>
    </div>
    {/* <div class="carousel-item">
      <img src={slider3} class="d-block w-100" alt="..."/>
    </div> */}
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>


    </div>
  )
}

export default Slider


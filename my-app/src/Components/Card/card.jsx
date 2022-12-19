import React from 'react'
import card1 from '../Assets/img/card1.jpg'
import './card.css'

const Card = () => {
    return (
        <div className='card-wrapper'>

            <div class="card">
                <img src={card1} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <div className="btn-wrapper d-flex">
                        <button type="button" class="btn btn-outline-dark btn-wrapper">₹ 295</button>
                        <button type="button" class="btn btn-danger btn-wrapper">Add to Bucket</button>
                    
                    </div>
                   
                </div>
            </div>
        </div>
    )
}

export default Card
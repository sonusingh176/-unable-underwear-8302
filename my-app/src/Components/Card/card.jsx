import React from 'react'
import card1 from '../Assets/img/card1.jpg'

const Card = () => {
    return (
        <div className='card-wrapper'>

            <div class="card">
                <img src={card1} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    )
}

export default Card
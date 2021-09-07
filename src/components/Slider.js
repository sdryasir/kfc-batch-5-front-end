import React from 'react'
import slider1 from '../assets/slider-1.jpg'
import slider2 from '../assets/slider-2.png'
import slider3 from '../assets/slider-3.png'

const Slider = () => {
    return (
        <div className="slider-box">
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={slider1} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={slider2} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={slider3} class="d-block w-100" alt="..." />
                    </div>
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

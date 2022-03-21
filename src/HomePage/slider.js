import React from 'react'
import { Carousel } from "react-bootstrap";
// import Render3 from "../Assests/render 3.png";
// import Render6 from "../Assests/render 6.png";
import ForWebsite from "../Assests/For Website.png";
import HasteKing from "../Assests/HasteKing.png";
import SliderImage3 from "../Assests/SliderImage3.png"

// import Render9 from "../Assests/render 9.png";
import Render11 from "../Assests/render 11.png";

import "./slider.css"

const Slider = () => {
  return (
    <div className='col-sm-12 p-0'>
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={Render11} className="img-fluid" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={ForWebsite}  className="img-fluid" alt="..." />
          </div>
          <div className="carousel-item">
            <img  src={SliderImage3} className="img-fluid" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>

    </div>
  )
}

export default Slider;

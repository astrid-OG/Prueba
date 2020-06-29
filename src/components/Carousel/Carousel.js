import React from "react";
import './Carousel.css';
import { Carousel } from "react-responsive-carousel";


export default () => (
  
    <Carousel autoPlay showThumbs={false}>
    <div >
      <img alt="" className="redondeado"  src="fotota.jpeg" />
      <p className="legend">FOTOTA!!</p>
    </div>
    

    </Carousel>
  );
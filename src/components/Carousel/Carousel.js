import React from "react";
import './Carousel.css';
import { Carousel } from "react-responsive-carousel";


export default (props) => (

  <Carousel autoPlay showThumbs={false}>
    {props.listImagen.map(item => {
      return <div >
        <img alt="" className="redondeado" src={item.imagen}/> 
        <p className="legend">{item.titulo}</p>
      </div>
    })}
  </Carousel>

);
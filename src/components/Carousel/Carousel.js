import React from "react";
import './Carousel.css';
import { Carousel } from "react-responsive-carousel";


export default () => (
  
    <Carousel autoPlay showThumbs={false}>
    <div >
      <img alt="" className="redondeado"  src="3.jpg" />
      <p className="legend">CARTAGENA</p>
    </div>
    <div>
      <img alt="" className="redondeado" src="1.jpg" />
      <p className="legend">PLAYA BLANCA</p>
    </div>
    <div>
      <img alt="" className="redondeado" src="2.jpg" />
      <p className="legend">CARTAGENA</p>
    </div>
    <div>
      <img alt="" className="redondeado" src="4.jpg" />
      <p className="legend">SAN FELIPE DE BARAJAS</p>
    </div>
    <div>
      <img alt="" className="redondeado" src="5.jpg" />
      <p className="legend">TERMALES MANIZALES</p>
    </div>
    <div>
      <img alt="" className="redondeado" src="6.jpg" />
      <p className="legend">FAMILIA</p>
    </div>
    <div>
      <img alt="" className="redondeado" src="7.jpg" />
      <p className="legend">EL BOSQUE PALMIRA</p>
    </div>
    <div>
      <img alt="" className="redondeado" src="8.jpg" />
      <p className="legend">PARQUE DEL CAFE</p>
    </div>
    <div>
      <img alt="" className="redondeado" src="9.jpg" />
      <p className="legend">KRATER PARQUE DEL CAFE</p>
    </div>
    <div>
      <img alt="" className="redondeado" src="10.jpg" />
      <p className="legend">PARQUE DEL CAFE</p>
    </div>
    <div>
      <img alt="" className="redondeado" src="11.jpg" />
      <p className="legend">SAN FELIPE DE BARAJAS</p>
    </div>
    <div>
      <img alt="" className="redondeado" src="12.jpg" />
      <p className="legend">EL PEÑOL</p>
    </div>
    <div>
      <img alt="" className="redondeado" src="13.jpg" />
      <p className="legend">EL PEÑOL</p>
    </div>

    </Carousel>
  );
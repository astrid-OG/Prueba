import React from "react";
import './Carousel.css';
import { Carousel } from "react-responsive-carousel";


const conflitco='esto es un confilcto'

const noconflict='extraño'
export default () => (
    <Carousel autoPlay>
    <div >
      <img alt="" className="redondeado" src="https://img.freepik.com/foto-gratis/avion-juguete-cerca-suministros-viaje_23-2147746341.jpg?size=626&ext=jpg" />
      <p className="legend">VIAJES</p>
    </div>
    <div>
      <img alt="" className="redondeado" src="https://img.freepik.com/foto-gratis/silla-mesa-comedor-playa-mar-cielo-azul_74190-6094.jpg?size=626&ext=jpg" />
      <p className="legend">PLAYA</p>
    </div>
    <div>
      <img alt="" className="redondeado" src="https://img.freepik.com/foto-gratis/palma-recorrido-lujo-bora-caribe_1203-5350.jpg?size=626&ext=jpg" />
      <p className="legend">MALDIVAS</p>
    </div>
    <div>
      <img alt="" className="redondeado" src="https://image.freepik.com/foto-gratis/panorama-piramides-teotihuacan_163782-417.jpg" />
      <p className="legend">MEXICO</p>
    </div>
    <div>
      <img alt="" className="redondeado" src="https://img.freepik.com/foto-gratis/bayside-marketplace-al-atardecer-miami-florida_29285-1088.jpg?size=626&ext=jpg" />
      <p className="legend">MIAMI</p>
    </div>
    <div>
      <img alt="" className="redondeado" src="https://img.freepik.com/foto-gratis/hermosa-panoramica-torre-eiffel-paris-rodeada-agua-barcos-cielo-colorido_181624-5118.jpg?size=626&ext=jpg" />
      <p className="legend">PARIS</p>
    </div>
      
    </Carousel>
  );
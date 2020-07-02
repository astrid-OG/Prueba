import React, { Component } from 'react';
import Carousel from './../components/Carousel/Carousel'
import Card from './../components/card/card'

class page1 extends Component{
    constructor(props) {
        super(props);
        this.state = {
            listCard: [{
                title: 'Peliculas Favoritas',
                description: 'El deporte es una actividad reglamentada, normalmente de carácter competitivo',
                imagen: 'https://previews.123rf.com/images/9dreamstudio/9dreamstudio1901/9dreamstudio190101658/115850127-movie-premiere-concept-clapperboard-film-stock-popcorn-on-pink-background-top-view.jpg'
            },
            {
                title: 'Musica Favorita',
                description: 'El deporte es una actividad reglamentada, normalmente de carácter competitivo',
                imagen: 'https://image.freepik.com/foto-gratis/cassette-auriculares-sobre-fondo-blanco-rosa_23-2148282094.jpg'

            },
            {
                title: 'Pasatiempos',
                description: 'El deporte es una actividad reglamentada, normalmente de carácter competitivo',
                imagen: 'https://image.freepik.com/vector-gratis/ilustracion-vectorial-actividades-diarias-rutina-ninos_29937-2538.jpg'

            },
            {
                title: 'Estudios',
                description: 'El deporte es una actividad reglamentada, normalmente de carácter competitivo',
                imagen: 'https://previews.123rf.com/images/phasuthorn/phasuthorn1601/phasuthorn160100113/51089219-las-preciosas-malvaviscos-coraz%C3%B3n-rosado-y-peque%C3%B1o-cuaderno-blanco-sobre-tela-de-algod%C3%B3n-de-color-rosa-para-e.jpg'

            },
            {
                title: 'Comida Favorita',
                description: 'El deporte es una actividad reglamentada, normalmente de carácter competitivo',
                imagen: 'https://www.dhresource.com/0x0/f2/albu/g8/M01/95/CF/rBVaVF0nMpyAbB42AAZ0gaIWb58282.jpg'

            },

            ],
            listImagen: [{
                imagen: '3.jpg',
                titulo: 'CARTAGENA'
            },
            {

                imagen: '1.jpg',
                titulo: 'PLAYA BLANCA'
            },
            {
                imagen: '2.jpg',
                titulo: 'CARTAGENA'
            },
            {
                imagen: '4.jpg',
                titulo: 'SAN FELIPE DE BARAJAS'
            },
            {
                imagen: '5.jpg',
                titulo: 'TERMALES MANIZALES'
            },
            {
                imagen: '6.jpg',
                titulo: 'FAMILIA'
            },
            {
                imagen: '7.jpg',
                titulo: 'EL BOSQUE PALMIRA'
            },
            {
                imagen: '8.jpg',
                titulo: 'PARQUE DEL CAFE'
            },
            {
                imagen: '9.jpg',
                titulo: 'KRATER PARQUE DEL CAFE'
            },
            {
                imagen: '10.jpg',
                titulo: 'PARQUE DEL CAFE'
            },
            {
                imagen: '11.jpg',
                titulo: 'SAN FELIPE DE BARAJAS'
            },
            {
                imagen: '12.jpg',
                titulo: 'EL PEÑOL'
            },
            {
                imagen: '13.jpg',
                titulo: 'EL PEÑOL'
            },
            {
                imagen: '14.jpg',
                titulo: 'CARTAGENA'
            },
            ]
        }
    }
    render() {
        return (
            <div> <br/> <Carousel listImagen={this.state.listImagen} /> <br/>
            <Card listCards={this.state.listCard} />
            </div>

        )

    }
}

export default page1;
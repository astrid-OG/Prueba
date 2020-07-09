import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import './responsive.css'


class Responsive extends Component {
    
    render() {
        const listfrase = [
                {
                    frase: 'Siempre yo me preguntaba que es lo que se siente que es lo que se siente cuando cuando a uno le gusta'  
                },
                {
                    frase:'alguien y no lo puede tener esos deseos te piden te piden de lleno a gritos quiero hacerte el amor y hoy que'
                },
                {
                    frase:'es lo que esta pasando muero de escribir lleno hay de lleno , hay, hay ,hay que es lo que estoy sintiendo que ya no puedo concentrarme en mi vida y me da miedo'
                },
                {
                    frase: 'decirte hay, hay ,ahy que es lo que estoy sintiendo por que apesar que escribo para desahogarme no es suficiente , eso me dan las ganas de hacerte el amor'
                }
                
        ]

        const list = listfrase.map(listfrase=><h3>{listfrase.frase}</h3>)
        return (
            
        <div>
            
        <Container>
        {/* Stack the columns on mobile by making one full-width and the other half-width */}
        <Row className="rows">
            <Col className="columns" text-aling='center' xs={12} md={8}>
            {list}
            </Col >
            <Col className="columns1" xs={12} md={4}>
            Las cosas buenas llegan a los que saben esperar.
            </Col>
        </Row>

        {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
        <Row className="rows">
            <Col className="columns1" xs={3} md={3}>
            Una persona que nunca se equivocó nunca intentó nada nuevo
            </Col>
            <Col className="columns" xs={5} md={5}>
            Aunque te sientas perdido y sin fuerzas recuerda que cada día puede ser el comienzo de algo maravilloso. No te rindas.
            </Col>
            <Col className="columns1" xs={4} md={4}>
            Todo lo que necesitas para ser feliz se encuentra al otro lado de tus miedo.
            </Col>
        </Row>

        {/* Columns are always 50% wide, on mobile and desktop */}
        <Row className="rows">
            <Col className="columns1" xs={6}>Deja que el mundo te sorprenda.</Col>
            <Col className="columns" xs={6}>Te has criticado a ti misma durante años y no ha funcionado. Prueba a halagarte y observa qué ocurre.</Col>
        </Row>
        </Container>
        </div>
        )

    }
}

export default Responsive;
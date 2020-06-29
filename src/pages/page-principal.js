import React, { Component } from 'react';
import { Grid, Cell } from "styled-css-grid";
import Carousel from './../components/Carousel/Carousel'
import Card from './../components/card/card'
import Barra from './../components/Barra/Barra'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "bootstrap/dist/css/bootstrap.min.css";



class PagePrincipal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listCard: [{
                title: 'Viajes',
                description: 'El deporte es una actividad reglamentada, normalmente de carácter competitivo',
                imagen: 'https://s.france24.com/media/display/6aca8d1a-7783-11ea-9cf2-005056bf87d6/w:1280/p:16x9/WEB%2005ABR%20DEPORTES%20PORTADA%20FOTO.webp'
            },
            {
                title: 'Comidas',
                description: 'El deporte es una actividad reglamentada, normalmente de carácter competitivo',
                imagen: 'https://conceptodefinicion.de/wp-content/uploads/2019/08/Gastronom%C3%ADa-1.jpg'

            },
            {
                title: 'Pasatiempos',
                description: 'El deporte es una actividad reglamentada, normalmente de carácter competitivo',
                imagen: 'https://www.educaciontrespuntocero.com/wp-content/uploads/2019/10/music-696x514.jpg'

            },
            {
                title: 'Estudios',
                description: 'El deporte es una actividad reglamentada, normalmente de carácter competitivo',
                imagen: 'https://www.expreso.info/files/2020-04/Felices_Vacaciones.jpg'

            },
            
        ]
        }
    }

    render() {
        return (
            <Grid
            columns={"310px 1fr 200px"}
            rows={"63px 1fr 45px"}
            areas={[
                "header header  header",
                "menu   content ads   ",
                "footer footer  footer"
            ]}>
            <Cell area="header"> <Barra/>
            </Cell>
            <Cell area="content"> <Carousel/> <br></br>
                <Card listCards={this.state.listCard}/>
            </Cell>
            <Cell area="menu">Menu</Cell>
            <Cell area="ads">Ads</Cell>
            <Cell area="footer">footer</Cell>
            </Grid>

        );
    }
}

export default PagePrincipal;

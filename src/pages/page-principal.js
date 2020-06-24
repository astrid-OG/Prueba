import React, { Component } from 'react';
import { Grid, Cell } from "styled-css-grid";
import Carousel from './../components/Carousel/Carousel'
import Card from './../components/card/card'
import "react-responsive-carousel/lib/styles/carousel.min.css";



class PagePrincipal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listCard: [{
                title: 'Deportes',
                description: 'El deporte es una actividad reglamentada, normalmente de carácter competitivo y que puede mejorar la condición física​ de quien lo practica, y además tiene',
                imagen: 'https://s.france24.com/media/display/6aca8d1a-7783-11ea-9cf2-005056bf87d6/w:1280/p:16x9/WEB%2005ABR%20DEPORTES%20PORTADA%20FOTO.webp'
            },
            {
                title: 'Comidas',
                description: 'El deporte es una actividad reglamentada, normalmente de carácter competitivo y que puede mejorar la condición física​ de quien lo practica, y además tiene',
                imagen: 'https://conceptodefinicion.de/wp-content/uploads/2019/08/Gastronom%C3%ADa-1.jpg'

            },
            {
                title: 'Musica',
                description: 'El deporte es una actividad reglamentada, normalmente de carácter competitivo y que puede mejorar la condición física​ de quien lo practica, y además tiene',
                imagen: 'https://www.educaciontrespuntocero.com/wp-content/uploads/2019/10/music-696x514.jpg'

            },
            {
                title: 'Viajes',
                description: 'El deporte es una actividad reglamentada, normalmente de carácter competitivo y que puede mejorar la condición física​ de quien lo practica, y además tiene',
                imagen: 'https://www.expreso.info/files/2020-04/Felices_Vacaciones.jpg'

            },
            {
                title: 'Deportes',
                description: 'El deporte es una actividad reglamentada, normalmente de carácter competitivo y que puede mejorar la condición física​ de quien lo practica, y además tiene',
                imagen: 'https://s.france24.com/media/display/6aca8d1a-7783-11ea-9cf2-005056bf87d6/w:1280/p:16x9/WEB%2005ABR%20DEPORTES%20PORTADA%20FOTO.webp'
            },
            {
                title: 'Comidas',
                description: 'El deporte es una actividad reglamentada, normalmente de carácter competitivo y que puede mejorar la condición física​ de quien lo practica, y además tiene',
                imagen: 'https://conceptodefinicion.de/wp-content/uploads/2019/08/Gastronom%C3%ADa-1.jpg'

            },
            {
                title: 'Musica',
                description: 'El deporte es una actividad reglamentada, normalmente de carácter competitivo y que puede mejorar la condición física​ de quien lo practica, y además tiene',
                imagen: 'https://www.educaciontrespuntocero.com/wp-content/uploads/2019/10/music-696x514.jpg'

            },
            {
                title: 'Viajes',
                description: 'El deporte es una actividad reglamentada, normalmente de carácter competitivo y que puede mejorar la condición física​ de quien lo practica, y además tiene',
                imagen: 'https://www.expreso.info/files/2020-04/Felices_Vacaciones.jpg'

            },
        ]
        }
    }

    render() {
        return (
            <Grid
                columns={"100px 1fr 100px"}
                rows={"minmax(45px,auto) 1fr minmax(45px,auto)"}>
                <Cell width={3}>
                    <h1>VIAJA POR EL MUNDO</h1>
                </Cell>

                <Cell>
                    Menu
      </Cell>

                <Cell>
                    <Carousel />
                    <Card listCards={this.state.listCard}/>
                </Cell>
                <Cell>Ads</Cell>

                <Cell width={3}>
                    Footer
      </Cell>
            </Grid>

        );
    }
}

export default PagePrincipal;

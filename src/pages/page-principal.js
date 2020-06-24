import React, { Component } from 'react';
import { Grid, Cell } from "styled-css-grid";
import Carousel from './../components/Carousel/Carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";



function PagePrincipal() {

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

            <Cell><Carousel /></Cell>
            <Cell>Ads</Cell>

            <Cell width={3}>
                Footer
      </Cell>
        </Grid>

    );
}

export default PagePrincipal;

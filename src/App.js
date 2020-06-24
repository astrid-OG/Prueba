import React,{Component} from 'react';
import './App.css';
import { Grid, Cell } from "styled-css-grid";
import Carousel from './Carousel/Carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";



function App() {

  return (
    <div className="App">
      <header className="App-header">
      <Grid
      columns={"100px 1fr 100px"}
      rows={"minmax(45px,auto) 1fr minmax(45px,auto)"}>
      <Cell width={3}>
        <h1>VIAJA POR EL MUNDO</h1>
      </Cell>

      <Cell> 
          Menu
      </Cell>
      
      <Cell><Carousel/></Cell>
      <Cell>Ads</Cell>

      <Cell width={3}>
        Footer
      </Cell>
      </Grid>
      </header>
    </div>
  );
}

export default App;

import React, { Component } from 'react';
import './App.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import PagePrincipal from './pages/page-principal'
import { Route, BrowserRouter, Redirect } from 'react-router-dom';
import history from './history';
import Barra from './components/Barra/Barra';
import Responsive from './components/responsive/responsive'
import Input from './components/input/input'
import "bootstrap/dist/css/bootstrap.min.css";
import Color from './components/color/color';



function App() {
  

  const estilo =['App-header','App-header2','App-header3']
  return (

    
    <BrowserRouter history={history}>
      <div className={estilo[2]}>
        <Route exact path="/" render={() => <Redirect to="/principal" />} />
        <Route path="/principal" component={PagePrincipal} />
        <Route path="/responsive" component={Responsive} />
        <Route path="/input" component={Input} />
        <Route path="/color" component={Color} />
      </div>
    </BrowserRouter>


  );
}

export default App;

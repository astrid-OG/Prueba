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



function App() {

  const estilo ='App-header2';
  return (

    <BrowserRouter history={history}>
      <div className={estilo}>
        <Route exact path="/" render={() => <Redirect to="/principal" />} />
        <Route path="/principal" component={PagePrincipal} />
        <Route path="/responsive" component={Responsive} />
        <Route path="/input" component={Input} />
      </div>
    </BrowserRouter>


  );
}

export default App;

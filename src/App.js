import React, { Component } from 'react';
import './App.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import PagePrincipal from './pages/page-principal'
import { Route, BrowserRouter, Redirect } from 'react-router-dom';
import history from './history';
import Barra from './components/Barra/Barra';
import "bootstrap/dist/css/bootstrap.min.css";


function App() {

  return (

    <BrowserRouter history={history}>
      <div className='App-header'>
        <Route exact path="/" render={() => <Redirect to="/principal" />} />
        <Route path="/principal" component={PagePrincipal} />
      </div>
    </BrowserRouter>


  );
}

export default App;

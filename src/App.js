import React, { Component } from 'react';
import './App.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import PagePrincipal from './pages/page-principal'
import Pagina  from './pages/pagina-cuarta-clase/pagina';
import { Route, BrowserRouter, Redirect } from 'react-router-dom';
import history from './history';
import Barra from './components/Barra/Barra';
import "bootstrap/dist/css/bootstrap.min.css";


function App() {

  const estilo='App-header';
  return (

    <BrowserRouter history={history}>
      <div className={estilo}>
        <Route exact path="/" render={() => <Redirect to="/principal" />} />
        <Route path="/principal" component={PagePrincipal} />
        <Route path="/cuarta-clase" component={Pagina} />
      </div>
    </BrowserRouter>


  );
}

export default App;

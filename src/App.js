import React, { Component } from 'react';
import './App.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import PagePrincipal from './pages/page-principal'



function App() {

  return (
    <div className="App">
      <header className="App-header">
       <PagePrincipal/>
      </header>
    </div>
  );
}

export default App;

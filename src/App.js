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



class App extends Component {
  constructor(props){
    super(props);
    this.state={
      estilo :['App-header','App-header2','App-header3','App-header4'],
      cont:0
    }
  }
      
  handleChangeBackground =()=> {
    var aux= this.state.cont
    aux++
    this.setState({
      cont:aux
    })
    
    if(this.state.cont==4){
      this.setState({
        cont:0
      })
    }  
    console.log(this.state)
  }
    render(){
      return(
      <BrowserRouter history={history}>
      <div className={this.state.estilo[this.state.cont]}>
        <Route exact path="/" render={() => <Redirect to="/principal" />} />
        <Route path="/principal" render={() => <PagePrincipal background={this.handleChangeBackground}/>} />
        <Route path="/responsive" component={Responsive} />
        <Route path="/input" component={Input} />
        <Route path="/color" component={Color} />
      </div>
    </BrowserRouter>

      )
    } 
}

export default App;

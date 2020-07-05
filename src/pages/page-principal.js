import React, { Component } from 'react';
import { Grid, Cell } from "styled-css-grid";
import Barra from './../components/Barra/Barra'
import page1 from './../pages/page1'
import bloGit from './../components/bloGit/bloGit'
import Notas from '../components/bloGit/Notas'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Route, Switch, Link } from 'react-router-dom';
import './page-principal.css';



class PagePrincipal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listItem: [{
                description:'Al disponer de un repositorio local, el desarrollador puede trabajar o enviar cambios de código al sistema sin tener que disponer de una conexión a Internet o a cualquier red.'
            },
            {
                description:'Recordar subir a GitHUb los cambios que realizamos  en nuestra  aplicación'
            },
            {
                description:'Es importante crear Ramas para subir nuestros cambios'
            },
            {
                description:'En el caso de que haya más de una persona trabajando en el mismo proyecto, GitHub permite hacer un seguimiento de todas las versiones y los cambios de una manera muy fácil, además de mantener el registro de las revisiones.'
            },
            {
                description:'Cualquier proyecto alojado en la plataforma está abierto a colaboraciones, ayudas y consejos'
            },

            ],

            listItem2: [{
                description:'Al disponer de un repositorio local, el desarrollador puede trabajar o enviar cambios de código al sistema sin tener que disponer de una conexión a Internet o a cualquier red.'
            },
            {
                description:'Recordar subir a GitHUb los cambios que realizamos  en nuestra  aplicación'
            },
            {
                description:'Es importante crear Ramas para subir nuestros cambios'
            },
        
            ]

        }
    }

    render() {
        return (
            <Grid 
                columns={"200px 1fr 200px"}
                rows={"63px 1fr 45px"}
                areas={[
                    "header header  header",
                    "menu   content ads   ",
                    "footer footer  footer"
                ]}>
                <Cell area="header"> <Barra />
                </Cell>
                <Cell area="content">
                    <div className="medida-content">
                        <Switch>
                            <Route exact path="/principal" component={page1}/>
                            <Route exact path="/principal/github" component={bloGit}/>
                        </Switch>
                    </div>


                </Cell>
                <Cell area="menu">
                    <div>
                        <Switch>
                        <Route exact path="/principal/github" render={()=><Notas lista={this.state.listItem}/>}/>
                        </Switch>
                    </div>
                </Cell>
                <Cell area="ads">
                <div>
                        <Switch>
                        <Route exact path="/principal/github" render={()=><Notas lista={this.state.listItem2}/>}/>
                        </Switch>
                    </div>
                </Cell>
                <Cell area="footer">footer</Cell>
            </Grid>

        );
    }
}

export default PagePrincipal;

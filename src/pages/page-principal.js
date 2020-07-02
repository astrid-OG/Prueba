import React, { Component } from 'react';
import { Grid, Cell } from "styled-css-grid";
import Barra from './../components/Barra/Barra'
import page1 from './../pages/page1'
import bloGit from './../components/bloGit/bloGit'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Route, Switch, Link } from 'react-router-dom';
import './page-principal.css';



class PagePrincipal extends Component {

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
                <Cell area="menu">Menu</Cell>
                <Cell area="ads">Ads</Cell>
                <Cell area="footer">footer</Cell>
            </Grid>

        );
    }
}

export default PagePrincipal;

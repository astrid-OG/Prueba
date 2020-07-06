import React, { Component } from 'react';
import Persona from './../../components/persona/persona';


class Pagina extends Component {
    constructor(props) {
        super(props);
        this.state = {

            listaNombres: [
                { nombre: 'Astrid' },
                { nombre: 'Carolna' },
                { nombre: 'Diany' },
                { nombre: 'Rosalba' }
            ]
        }


    }

    handleSwitchName = (name) => {
        this.setState({
            listaNombres: [
                { nombre: name },
                { nombre: 'Carolna' },
                { nombre: 'Diany' },
                { nombre: 'Rosalba' }
            ]
        })

    }

    handleChangeName = (event) => {
        this.setState({
            listaNombres: [
                { nombre: event.target.value },
                { nombre: 'Carolna' },
                { nombre: 'Diany' },
                { nombre: 'Rosalba' }
            ]
        })

    }

    render() {
        return (
            <div>
                <Persona change={this.handleChangeName} nombre={this.state.listaNombres[0].nombre} />
                <Persona change={this.handleChangeName} nombre={this.state.listaNombres[1].nombre} />
                <Persona change={this.handleChangeName} nombre={this.state.listaNombres[2].nombre} />
                <Persona change={this.handleChangeName} click={()=>this.handleSwitchName('Vanesa')} nombre={this.state.listaNombres[3].nombre} />
            </div>
        );
    }


}

export default Pagina;
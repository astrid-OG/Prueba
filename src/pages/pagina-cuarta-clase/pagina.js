import React, { Component } from 'react';
import Persona from './../../components/persona/persona';
import Button from 'react-bootstrap/Button';


class Pagina extends Component {
    constructor(props) {
        super(props);
        this.state = {

            listaNombres: [
                { nombre: 'Astrid' },
                { nombre: 'Carolna' },
                { nombre: 'Diany' },
                { nombre: 'Rosalba' }
            ],
            show:true

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

    handleChangeName = (index, event) => {
        const aux = this.state.listaNombres;
        //const aux2 = {nombre:event.target.value}
        aux.splice(index, 1, { nombre: event.target.value });
        // aux[index].nombre=event.target.value;
        this.setState({
            listaNombres: aux
        })

        // this.setState({
        //     listaNombres: [
        //         { nombre: event.target.value },
        //         { nombre: event.target.value },
        //         { nombre: event.target.value },
        //         { nombre: event.target.value }
        //     ]
        // })

    }

    handleChangestate = (index) => {
        
        this.setState({
            show: !this.state.show
        });
        console.log(this.state)
    }


    handleremoveparagraph(index) {
        const aux = this.state.listaNombres;
        aux.splice(index, 1);
        this.setState({
            listaNombres: aux
        })
    }

    render() {

        return (
            <>
                {this.state.show ?
                    <div>
                        {this.state.listaNombres.map((item, i) => {
                            return <div key={i}>
                                <Persona delete={() => this.handleremoveparagraph(i)} change={event => this.handleChangeName(i, event)} click={() => this.handleSwitchName('Vanesa')} nombre={item.nombre} />
                            </div>

                        })}

                    </div>
                    :
                    null
                }
                <Button variant="primary" size="lg" onClick={this.handleChangestate}>
                    Ocultar o Mostrar Datos
                </Button>


            </>

        )
    }
}

export default Pagina;
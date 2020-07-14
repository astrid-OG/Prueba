import React from 'react';
import './persona.css'

const Persona = (props) => {
    return (
        <div className="style">
            {props.nombre === 'Astrid' ?
                <div >
                    <h1 onClick={props.delete}>Soy una persona mi nomnbre es {props.nombre}</h1>
                    <h1>Soy muy alegre</h1>
                    <input onChange={props.change} />
                </div>
                :
                <div>
                    <h1 onClick={props.delete} >Soy una persona mi nomnbre es {props.nombre}</h1>
                    <input onChange={props.change} />
                </div >

            }


        </div>
    );

}

export default Persona;
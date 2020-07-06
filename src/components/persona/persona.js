import React from 'react';


const Persona = (props) => {
    return (
        <div>
            {props.nombre === 'Astrid' ?
                <div>
                    <h1>Soy una persona mi nomnbre es {props.nombre}</h1>
                    <h1>Soy muy alegre</h1>
                    <input onChange={props.change} />
                </div>
                :
                <div>
                    <h1 onClick={props.click} >Soy una persona mi nomnbre es {props.nombre}</h1>
                    <input onChange={props.change} />
                </div >

            }

        </div>
    );

}

export default Persona;
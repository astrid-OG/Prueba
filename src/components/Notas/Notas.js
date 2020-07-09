import React from 'react';
import './Notas.css';


export default(props)=>(
        <div>
            {props.lista.map(item => {
                return  <div>  
                <br/><br/><br/>
                <p className='stylenotas'> {item.description} </p>
                </div>
                
            })}
        </div>
);
import React from 'react';
import './bloGit.css';


export default(props)=>(
        <div>
            {props.lista.map(item => {
                return  <div>  
                <p className='gatsby-highlight'> {item.description} </p>
                </div>
                
            })}
        </div>
);
import React, { Component } from 'react';
import './bloGit.css';

class bloGIt extends Component{

render() {
    return (
        <div className='Git-color'> 
        <div className='imagen'>
            <img maxwidth='100%' height='200' src='https://www.solucionespm.com/wp-content/uploads/2018/11/GitHub.png'></img>
            </div>
            <br/><br/>
            <h1 className='letra' >COMANDOS DE GITHUB</h1>
            <p>Git trabaja a modo de repositorio local, y al finalizar cada cambio podemos guardar en el repositorio remoto de GitHub. 
                Acontinuación se muestran los comandos esenciales para manejar GitHub.</p> 

            <h2 className='letra'>Git add</h2>
            <p>git add . se utiliza para agregar archivos al índice del proyecto. Este comando se utiliza agregando al final el nombre del 
                archivo o colocando un punto como se muestra en el comando de abajo.</p>
            <pre className='gatsby-highlight'><br/> git add . <br/> </pre>

            <h2 className='letra'>Git commit</h2>
            <p>Guarda los cambios realizardos utilizando git commit. Al guardar podremos especificar un mensaje para identificar el cambio que
            realizamos o agregar un comentario.</p>
            <pre className='gatsby-highlight'><br/> git commit -m "mensaje de referencia" <br/> </pre>

            <h2 className='letra'>Git branch</h2>
            <p>Este comando se usa para listar, crear o borrar ramas. Para listar todas las ramas utiliza.</p>
            <pre className='gatsby-highlight'><br/> git branch <br/> </pre>

            <h2 className='letra'>Git push</h2>
            <p>Envía los cambios que se han realizado.</p>
            <pre className='gatsby-highlight'><br/> git push origin master<br/> </pre>

            <h2 className='letra'>Git pull</h2>
            <p>Fusionar todos los cambios que se han hecho en el repositorio local.</p>
            <pre className='gatsby-highlight'><br/> git pull <br/> </pre>

            <h2 className='letra'>Git fetch</h2>
            <p>Busca todos los recursos de un repositorio remoto que actualmente no están en el directorio local.</p>
            <pre className='gatsby-highlight'><br/> git fetch origin <br/> </pre>
            <p>.</p>
        </div>
    )

}
}

export default bloGIt;
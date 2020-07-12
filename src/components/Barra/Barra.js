import React, {Component} from 'react'
import './Barra.css';
import {Link} from 'react-router-dom'
export default class Barra extends Component{
    render() {
        return(
            <nav className="navbar navbar-expand-md navbar-dark navbar-custom">
            <Link className="navbar-brand"to={{ pathname:`/principal`}}>
            <img height="45" src="https://1.bp.blogspot.com/-_8GOVgtz9W0/Xic-VQpUSWI/AAAAAAAJsKg/g2q5CNoPgMM5PtuXSM53wCLRUPQpSWA6ACLcBGAsYHQ/s280/blushbutter_GLAM7_A1.png">
            </img><img height="45" src="https://1.bp.blogspot.com/-srH3HP6CITo/Xic-jTpNjoI/AAAAAAAJsLU/Ox-nWAglGwwWhFDsgSUzPsZ1JglWJ94bQCLcBGAsYHQ/s320/blushbutter_GLAM7_O1.png"></img> PAGINA PERSONAL </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <Link className="nav-link" to={{pathname:`/principal/perfil`}}>Perfil <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={{pathname:`/principal/github`}}>GitHub</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={{ pathname:`/principal/itinerario`}}>Itinerario</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={{pathname:`/principal/otros`}} tabindex="-1" aria-disabled="true">Otros</Link>
                </li>
              </ul>
            </div>
          </nav>
        )
    }
}
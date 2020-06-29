import React, {Component} from 'react'
import './Barra.css';
import {Link} from 'react-router-dom'
export default class Barra extends Component{
    render() {
        return(
            <nav className="navbar navbar-expand-md navbar-dark navbar-custom">
            <a className="navbar-brand" href="#">
            <img height="45" src="https://1.bp.blogspot.com/-_8GOVgtz9W0/Xic-VQpUSWI/AAAAAAAJsKg/g2q5CNoPgMM5PtuXSM53wCLRUPQpSWA6ACLcBGAsYHQ/s280/blushbutter_GLAM7_A1.png">
            </img><img height="45" src="https://1.bp.blogspot.com/-srH3HP6CITo/Xic-jTpNjoI/AAAAAAAJsLU/Ox-nWAglGwwWhFDsgSUzPsZ1JglWJ94bQCLcBGAsYHQ/s320/blushbutter_GLAM7_O1.png"></img> PAGINA PERSONAL </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="#">Segundo <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={{pathname:`/principal`}}>Tercero</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={{ pathname:`/principal/tarjetas`}}>Cuarto</Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Quinto</a>
                </li>
              </ul>
            </div>
          </nav>
        )
    }
}
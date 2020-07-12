import React,{ Component } from 'react';
import {tareas} from './../../tareas.json';
import FormItinerario from '../formItinerario/formItinerario';

class Itinerario extends Component{
    constructor() {
        super();
        this.state = {
          tareas
        }
        this.handleAddTareas = this.handleAddTareas.bind(this);
      }

      removeTareas(index) {
        this.setState({
          tareas: this.state.tareas.filter((event, i) => {
            return i !== index
          })
        });
      }
    
      handleAddTareas(tareas) {
        this.setState({
          tareas: [...this.state.tareas, tareas]
        })
      }

      render() {
        const tareas = this.state.tareas.map((tareas, i) => {
          return (
            <div className="col-md-4" key={i}>
              <div className="card mt-4">
                <div className="card-title text-center" >
                  <h3>{tareas.title}</h3>
                  <span className="badge badge-pill badge-info ml-2">
                    {tareas.priority}
                  </span>
                </div>
                <div className="card-body">
                  {tareas.description}
                </div>
                <div className="card-body">
                  {tareas.time}
                </div>
                <div className="card-footer text-center">
                  <button
                    className="btn btn-info"
                    onClick={this.removeTareas.bind(this, i)}>
                    Eliminar
                  </button>
                </div>
              </div>
            </div>
          )
        });
    
        
        return (
          <div>
            <div className="container">
              <div className="row mt-4">
                <div className="col-md-4 text-center">
                  <FormItinerario onAddTareas={this.handleAddTareas}></FormItinerario>
                </div>
                <div className="col-md-8">
                  <div className="row">
                    {tareas}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      }
}

export default Itinerario;




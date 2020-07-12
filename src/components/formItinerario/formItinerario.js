import React,{ Component } from 'react';

class FormItinerario extends Component{
    constructor (){
        super();
        this.state = {
            "title": '',
            "description": '',
            "time": '',
            "priority": 'baja'
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
        event.preventDefault();
        this.props.onAddTareas(this.state);
        this.setState({
            "title": '',
            "description": '',
            "time": '',
            "priority": 'baja'
                });
    }
    handleInputChange(event) {
        const {value, name} = event.target;
        this.setState({
            [name]: value
        });
        }

    render() {
        return (
            <div className="card">
                <form onSubmit={this.handleSumit} className="card-body">
                    <div className="form-group">
                        <input type="text" name="title" className="form-control" value={this.state.title}
                        onChange={this.handleInputChange} placeholder="Titulo"/>
                    </div>

                    <div className="form-group">
                        <input type="text" name="description" className="form-control" value={this.state.description}
                        onChange={this.handleInputChange} placeholder="Descripción"
                        />
                    </div>

                    <div className="form-group">
                        <input type="text" name="time" className="form-control" value={this.state.time}
                        onChange={this.handleInputChange} placeholder="Horario"
                        />
                    </div>

                    <div className="form-group">
                        <select name="Prioridad" className="form-control" value={this.state.priority} onChange={this.handleInputChange}>
                        <option>baja</option>
                        <option>media</option>
                        <option>alta</option>
                        </select>
                    </div>

                    <button type="submit" className="btn btn-info" onClick={this.handleSubmit}> Guardar </button>
                </form>
            </div>
        )
    }

}

export default FormItinerario;




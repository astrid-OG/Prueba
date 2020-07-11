import React from "react";
import ReactDom from"react-dom";
import "./input.css"

class Input extends React.Component{

    state={
        color:'fuchsia'
    }

    onChangeHandler = (event) =>{
        this.setState({
            color: event.target.value
        })
    }

    render(){

        const styleObj={
            background: this.state.color
        }
        return(
            <div style={styleObj} className="style">
                <div className="ui card">
                    <div className="content">
                        <div className="header">
                            <h2>Ingrese un color</h2>
                            color:{this.state.color}
                        </div>
                    <div className="ui search" >
                    <input className="redondear" onChange={this.onChangeHandler} value={this.state.color} type="text"></input>
                    </div>
                    </div>
                </div>
                
                
            </div>
        )
    }
}

export default Input;
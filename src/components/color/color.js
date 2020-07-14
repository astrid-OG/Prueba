import React from 'react';


const green = 'pink';
const yellow = 'yellow';

 class Color extends React.Component{
  constructor(props){
    super(props);
    this.state = { color: green };
    this.changeColor = this.changeColor.bind(this);
  }

  changeColor(){
    const newColor = this.state.color == green ? yellow : green;
    this.setState({ color: newColor })
  }
  render(){
    return(
      <div style={{background: this.state.color}}>
      <h1>Change my color</h1>
      <button onClick={this.changeColor}>Click</button>
      </div>
    )
  }
}

export default Color;
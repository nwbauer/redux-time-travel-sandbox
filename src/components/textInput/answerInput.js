import React, { Component } from 'react';

//an example of a stateless componet
//this componet announces changes to its parent
//and updates its value whever the parent wants
class AnswerInput extends Component {

  handleChange(event) {
    this.props.newName(event.target.value);
  }

  render() {
    return <input type="text" value={this.props.value} onChange={this.handleChange.bind(this)}></input>;
  }
}

export default AnswerInput;

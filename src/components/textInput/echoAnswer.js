import React, { Component } from 'react';
import './textInput.css';

//about as easy as it gets when it comes to react components
class EchoAnswer extends Component {
  render() {
    return <p className="hot">Your answer: {this.props.value}</p>;
  }
}

export default EchoAnswer;

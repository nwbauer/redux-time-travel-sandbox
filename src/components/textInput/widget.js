import React, { Component } from 'react';

//component composition
import EchoAnswer from './echoAnswer.js';
import AnswerInput from './answerInput.js';
import CorrectIndicator from '../CorrectIndicator.js';

//this is the root widget component

//this widget's state should be observable from the Redux store
//it is sufficient to store the entire state in the Redux store
//it is necessary that the entire state be observable from the Redux store

//INPUTS
//this.props.state - getting the state from the store (via parent WidgetContainer)
//this.props.formSubmitCount - submit count

//OUTPUTS
//this.props.changeState - store state in Redux (via parent WidgetContainer)

//STATE REQUIREMENTS
//correct - boolean indicates wether the answer provided is correct

class Widget extends Component {

  onNameChange(value) {
    //up to the widget to identify what 'correct' is?
    var correct = (this.props.state.correctAnswer === value);

    //Key Principle 1: the widget's state lives in the WidgetContainer
    //so its state is considered observable from the Redux store
    this.props.changeState({ name: value, correct: correct });
  }

  clearName() {
    this.onNameChange();
  }

  render() {
    //Key Principle 2: the widget gets its state from WidgetContainer

    //btw, render fires on every prop change, so any state changes, this
    //component re-renders
    var name = this.props.state.name || '';
    var question = this.props.state.question;
    var correct = this.props.state.correct;

    return <div>
      <p>{question}</p>
      <AnswerInput value={name} newName={this.onNameChange.bind(this)}></AnswerInput>
      <button type="button" onClick={this.clearName.bind(this)}>Clear</button>
      <CorrectIndicator submitted={this.props.formSubmitCount} correct={correct} />
      <EchoAnswer value={name}/>
    </div>;
  }
}

export default Widget;

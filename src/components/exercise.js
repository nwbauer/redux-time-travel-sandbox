import React, { Component } from 'react';

//component composition
import TextInputWidget from './textInput/widget.js';
import WidgetContainer from './WidgetContainer.js';

//connect to app store
import { connect } from 'react-redux';
import { incrementSubmitCount, complete, newMessage, toc } from '../redux/actions.js';

//This is an exercise component.  An exercise consists of 'containerized' widgets.
//he exercise is responsible for setting up the individual (sub)question widgets
//and determining if the exercise is complete.

class Exercise extends Component {

  checkAnswers() {
    this.props.dispatch(toc());
    this.props.dispatch(incrementSubmitCount());

    //this assumes all widgets have a state property 'correct' that is stored in Redux
    var allCorrect = Object.keys(this.props.states).every((id) => this.props.states[id].correct);
    if (allCorrect) {
      this.props.dispatch(newMessage('correct!'));
      this.props.dispatch(complete());
    } else {
      this.props.dispatch(newMessage('try again!'));
    }
  }

  render() {
    var ContainerizedWidget = <WidgetContainer widget={TextInputWidget} />;
    return <div>
      <h1>Some Questions</h1>
      <WidgetContainer
        widget={TextInputWidget}
        formSubmitCount={this.props.submitCount}
        initialState={{ correctAnswer: 'Sir Launcelot of Camelot', question: 'What is your name?' }} />
      <WidgetContainer
        widget={TextInputWidget}
        formSubmitCount={this.props.submitCount}
        initialState={{ correctAnswer: 'To seek the Holy Grail', question: 'What is your quest?' }} />
      <WidgetContainer
        widget={TextInputWidget}
        formSubmitCount={this.props.submitCount}
        initialState={{ correctAnswer: 'Blue', question: 'What is your favorite color?' }} />
      <button type="button" onClick={this.checkAnswers.bind(this)}>Submit</button>
      <div>Submit Count: {this.props.submitCount}</div>
      <div>{this.props.message.value}</div>
    </div>;
  }
}

//this is a 'smart component' that knows about the Redux store
export default connect((store) => {
  return {
    states: store.widget,
    message: store.message,
    submitCount: store.submitCount,
  };
})(Exercise);

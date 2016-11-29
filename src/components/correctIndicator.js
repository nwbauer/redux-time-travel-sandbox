import React, { Component } from 'react';

class CorrectIndicator extends Component {
  constructor(props) {
    super(props);

    //this component is interesting since it has it's own isolated state
    //which is generally a bad thing since this means a state component
    //can be 'unobservable' from the Redux store's perspective, meaning that a
    //state property cannot be determined from the initial Redux store's state
    //and subsequent actions
    this.state = { lastSubmit: null, correct:false };
  }

  componentWillReceiveProps(nextProps)  {
    //here, the isolated state is directly coupled to its props, so time travel works.
    //Since the props are controlled by the redux store, correct and lastSubmit
    //are still 'observable' states, meaning they can be determined directly from the
    //initial Redux store's state, and subsequent actions
    if (this.props.submitted !== nextProps.submitted) {
      this.setState({ correct: nextProps.correct });
    }

    this.setState({ lastSubmit: this.props.submitted });
  }

  render() {
    return <div>
      <span className={(this.props.submitted && !this.state.correct) ? '' : 'hidden'  }>Not Correct</span>
      <span className={(this.props.submitted && this.state.correct) ? '' : 'hidden' }>Correct</span>
    </div>;
  }

}

export default CorrectIndicator;

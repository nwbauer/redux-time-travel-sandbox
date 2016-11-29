import React, { Component } from 'react';

//connect to app store
import { connect } from 'react-redux';
import { widgetUpdate, registerWidget, incrementActionCount } from '../redux/actions.js';

//This widget container is a wrapper that is repsonsible for talking with the
//Redux store. It provides a method to update a widget's state and access to
//state that is returned from Redux.  A glorified middle man, if you will.

//INPUTS
//this.props.formSubmitCount - number of times form was submitted
//this.props.states - from Redux

//OUTPUTS
//widgetUpdate - update the widget's state in Redux
//registerWidget - tell the Redux store a new widget needs storing

class WidgetContainer extends Component {
  constructor (props) {
    super(props);

    //create some space to store a widget's state in the Redux store
    this.registration = registerWidget(this.props.initialState);
    this.props.dispatch(this.registration);
    this.id = this.registration.id;
  }

  changeState(state) {
    //this method is how a widget should update it's state
    this.props.dispatch(incrementActionCount());
    this.props.dispatch(widgetUpdate(this.id, state));
  }

  render() {
    //here we pass the widget an interface to update its state *properly*
    return <div>
      <this.props.widget
        changeState={this.changeState.bind(this)}
        formSubmitCount={this.props.formSubmitCount}
        state={this.props.states[this.id] || {}} />
    </div>;
  }
}

//this is a 'smart component' that knows about the Redux store
export default connect((store) => { return { states: store.widget }; })(WidgetContainer);

const initialState = {
  widgets: {},
  actionCount: 0,
  submitCount: 0,
  time: {
    start: new Date(),
    latencies:[],
    end: null,
  },
  message: {
    showing: false,
    value: '',
  },
};

const widgetUpdate = (state = initialState.widgets, action) => {
  var actions = {
    UPDATE_WIDGET(userName) {
      var newState = Object.assign({}, state[action.id], action.state);
      return { ...state, [action.id]: newState };
    },
  };

  return actions[action.type] ? actions[action.type]() : state;
};

const actionCountReducer = (state = initialState.actionCount, action) => {
  var actions = {
    INCREMENT_ACTION_COUNT() {
      return state + 1;
    },
  };

  return actions[action.type] ? actions[action.type]() : state;
};

const submitCountReducer = (state = initialState.submitCount, action) => {
  var actions = {
    INCREMENT_SUBMIT_COUNT() {
      return state + 1;
    },

  };

  return actions[action.type] ? actions[action.type]() : state;
};

const messageReducer = (state = initialState.message, action) => {
  var actions = {
    SHOW_MESSAGE() {
      return { ...state, value: action.message, showing: true };
    },

  };

  return actions[action.type] ? actions[action.type]() : state;
};

const timeReducer = (state = initialState.time, action) => {
  var actions = {
    TOC() {
      var submitRecord = new Date() - state.start;
      var latencies = state.latencies.concat(submitRecord);
      return { ...state, latencies };
    },

    COMPLETE() {
      return { ...state, end: new Date() };
    },
  };

  return actions[action.type] ? actions[action.type]() : state;
};

export default {
  widget: widgetUpdate,
  actionCount: actionCountReducer,
  submitCount: submitCountReducer,
  message: messageReducer,
  time: timeReducer,
};

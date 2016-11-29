var widgetId = 0;

export function registerWidget(state) {
  return {
    type: 'UPDATE_WIDGET',
    id: widgetId++,
    state: state || {},
  };
}

export function widgetUpdate(id, state) {
  return {
    type: 'UPDATE_WIDGET',
    id: id,
    state: state,
  };
}

export function incrementActionCount() {
  return {
    type: 'INCREMENT_ACTION_COUNT',
  };
}

export function incrementSubmitCount() {
  return {
    type: 'INCREMENT_SUBMIT_COUNT',
  };
}

export function toc() {
  return {
    type: 'TOC',
  };
}

export function complete(state) {
  return {
    type: 'COMPLETE',
  };
}

export function newMessage(message) {
  return {
    type: 'SHOW_MESSAGE',
    message: message,
  };
}

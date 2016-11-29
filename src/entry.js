import React from 'react';
import ReactDOM from 'react-dom';

import Exercise from './components/exercise.js';
import './style.css';
import { Provider } from 'react-redux';

import store from './redux/store.js';

ReactDOM.render(
  <Provider store={store}>
    <Exercise name="ted"/>
  </Provider>,
  document.getElementById('root')
);

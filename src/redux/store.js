import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import logger from 'redux-logger';
import reducerMap from './reducers.js';

const middleWare = applyMiddleware(logger());
const reducer = combineReducers(reducerMap);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ maxAge: 200 }) || compose;
var store = createStore(reducer, composeEnhancers(middleWare));

store.subscribe(() => {
  console.log('store changed', store.getState());
});

export default store;

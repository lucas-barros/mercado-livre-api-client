import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducers from 'store/rootReducers';
import rootSagas from 'store/rootSagas';

import { Router } from 'router';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducers, {}, applyMiddleware(sagaMiddleware));

// run the saga
sagaMiddleware.run(rootSagas);

ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById('root')
);

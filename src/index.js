import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import itemReducer from './reducers/itemReducer';
import './index.css';
import App from './App';
//import reportWebVitals from './reportWebVitals';

let store = createStore(itemReducer, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store= { store }>
    <Router>
      <App />
    </Router>
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();

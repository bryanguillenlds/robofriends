
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import './index.css';
import App from './containers/App.js';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import {requestRobots, searchRobots} from './reducers.js';

// Setting up middleware
const logger = createLogger();
// Combine the reducers into a root reducer
const rootReducer = combineReducers({
  searchRobots,
  requestRobots
});
// Init store and apply middleware (it applies them in order)
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/*Passing the store to the Provider which will handle passing it to all descendant components
    instead of having to pass it to each component individually.*/}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

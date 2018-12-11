import * as React from 'react';
import * as ReactDOM from 'react-dom';
import "./css/style.css";
// import {Provider} from 'react-redux'
// import {BrowserRouter} from 'react-router-dom'
import App from './App'
// import createStore from './store'

// const store = createStore( window.REDUX_DATA );

ReactDOM.hydrate(
  // <Provider store={store}>
    // <BrowserRouter>
      <App />
    // </BrowserRouter>
  // </Provider>
  , document.getElementById('root'));
  
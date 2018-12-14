import * as React from 'react';
import * as ReactDOM from 'react-dom';
import "./sass/main.scss";
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
import App from './App';
import createStore from './store'

const store = createStore( window.__INITIAL_STATE__ )

ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
   </Provider>
  , document.getElementById('root'));
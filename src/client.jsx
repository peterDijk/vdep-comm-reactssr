import * as React from 'react';
import * as ReactDOM from 'react-dom';
import "./sass/main.scss";
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
import App from './App';
import store, { sagaMiddleware } from './store'
import rootSaga from './sagas'

// const store = createStore( window.REDUX_DATA );

ReactDOM.hydrate(
  <Provider store={store(window.REDUX_DATA)}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
   </Provider>
  , document.getElementById('root'));
  // sagaMiddleware.run(rootSaga)
  console.log('from after running in client.jsx')
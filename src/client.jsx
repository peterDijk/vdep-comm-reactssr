import * as React from 'react';
import * as ReactDOM from 'react-dom';
import "./sass/main.scss";
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
import App from './App';
import createStore, { sagaMiddleware } from './store'
import rootSaga from './sagas'

const store = createStore( window.REDUX_DATA );
sagaMiddleware.run(rootSaga)

ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
   </Provider>
  , document.getElementById('root'));
  // 

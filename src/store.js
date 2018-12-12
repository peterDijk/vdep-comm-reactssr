import 'regenerator-runtime/runtime'
import { createStore, combineReducers, compose, applyMiddleware } from "redux"
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'
import reducers from './reducers'

const reducer = combineReducers( reducers )
export const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose


const store = createStore( reducer, composeEnhancers(applyMiddleware(sagaMiddleware)) ) // ( initialState ) => 
sagaMiddleware.run(rootSaga)
export default store
console.log('from store.js')
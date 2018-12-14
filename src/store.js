import 'regenerator-runtime/runtime'
import { createStore, combineReducers, compose, applyMiddleware } from "redux"
// import createSagaMiddleware from 'redux-saga'
import ReduxThunk from 'redux-thunk'
// import rootSaga from './sagas'
import reducers from './reducers'

const reducer = combineReducers( reducers )
// export const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose


const store = ( initialState ) => createStore( reducer, initialState, composeEnhancers(applyMiddleware(ReduxThunk)) ) // ( initialState ) => 

export default store

import 'regenerator-runtime/runtime'
import { createStore, combineReducers, compose, applyMiddleware } from "redux"
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'
import reducers from './reducers'

const reducer = combineReducers( reducers )
export const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose


const store = ( initialState ) => createStore( reducer, initialState, composeEnhancers(applyMiddleware(sagaMiddleware)) ) // ( initialState ) => 

export default store

// when i create store as a function (width arg initialState) that returns createStore
//    - if setup in client.jsx as const store = createStore(window.REDUX_DATA)
//      redux is at client created with that initial state. So faster visible
//      but then sagas don't work
//      applyMiddleware doesn't run > sagaMiddleware.run(rootSaga) gives error
//      throw new Error('Before running a Saga, you must mount the Saga middleware on          the Store using applyMiddleware');

//      sagaMiddleware has to run somewhere else !! then i have && initialState &&             Sagas working - SOLVED
//      sagaMiddleware.run(rootSaga) in client.jsx imm after const store = createStore         (window.reduxdata)

// when const store = createStore
//    - in client.jsx import store, and as argument in <Provider store={store}
//      * sagas work

//      but no redux store created with initial state. So the app needs action creator in componentDidMount and then the api calls have to been done again, to put content data in redux. So site loads slower, because api fetching is done twice: at server, and happens again in client.
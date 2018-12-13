import { takeLatest, call, put } from 'redux-saga/effects'
import * as types from '../actions/constants'

export function* watcherUtils() {
  yield takeLatest(types.INITIALIZE, reduxInitSaga)
}

function* reduxInitSaga() {
  try {
    
    yield put({ type: types.INITIALIZE_SUCCESS })
  }
  catch(err) {
    console.log(err)
    yield put({ type: types.INITIALIZE_FAILED })
  }
}
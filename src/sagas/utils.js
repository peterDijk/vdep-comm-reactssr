import { takeLatest, call, put } from 'redux-saga/effects'
import * as types from '../actions/constants'

export function* watcherUtils() {
  yield takeLatest(types.INITIALIZE, reduxInit)
}

function* reduxInit() {
  try {
    yield put({ type: types.INITIALIZE })
  }
  catch(err) {
    yield put({ type: types.INITIALIZE_FAILED })
  }
}
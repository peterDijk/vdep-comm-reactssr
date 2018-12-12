import { takeLatest, call, put } from 'redux-saga/effects'
import * as types from '../actions/constants'

export function* watcherUtils() {
  console.log('** from saga watcherUtils')
  yield takeLatest(types.INITIALIZE, reduxInitSaga)
  console.log('after yield')
}

function* reduxInitSaga() {
  console.log('******************* from watched saga')
  try {
    
    yield put({ type: types.INITIALIZE_SUCCESS })
  }
  catch(err) {
    console.log(err)
    yield put({ type: types.INITIALIZE_FAILED })
  }
}
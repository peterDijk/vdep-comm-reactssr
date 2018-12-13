import { all } from 'redux-saga/effects'

import { watcherUtils } from './utils'

export default function* rootSaga() {
  yield all([
    watcherUtils()
  ])
}
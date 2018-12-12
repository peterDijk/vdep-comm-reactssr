import { all } from 'redux-saga/effects'

import { watcherUtils } from './utils'

export default function* rootSaga() {
  console.log('loading rootsaga')
  yield all([
    watcherUtils()
  ])
}
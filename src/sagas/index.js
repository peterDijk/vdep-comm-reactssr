import { all } from 'redux-saga/effects'

import { watcherUtils } from './utils'
import { watcherPage } from './page'

export default function* rootSaga() {
  yield all([
    watcherUtils(),
    watcherPage()
  ])
}
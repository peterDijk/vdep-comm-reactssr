import { takeLatest, call, put } from 'redux-saga/effects'
import * as types from '../actions/actionTypes'
import axios from 'axios'
import * as constants from '../constants'


export function* watcherPage() {
  yield takeLatest(types.PAGE_CONTENT_REQUEST, fetchPageSaga)
}

function* fetchPageSaga(action) {
  const { payload } = action
  const url = `${constants.contentDomain}/cms/jsonapi/node/page?include=field_sections,field_header,field_header.field_background_image&filter[page][condition][path]=field_slug&filter[page][condition][value]=home`
  try {
    
    const request = yield call(apiRequest, url, 'GET')
    
    yield put({ type: types.PAGE_CONTENT_REQUEST_SUCCESS, payload: request.data })
    
  } catch(err) {
    console.error(err)
    yield put({ type: types.PAGE_CONTENT_REQUEST_FAILURE, payload: err})
  }
}

function apiRequest(url, method) {
  console.log('from api req')
  return axios({
    method,
    url
  })
}
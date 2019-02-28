import * as types from '../actions/actionTypes'

const intitialState = {
  data: [],
  included: []
}

let requestsSinceStart = 0;

export default (state = intitialState, { type, payload }) => {
  switch (type) {
    case types.PAGE_CONTENT_REQUEST_SUCCESS:
      console.log(types.PAGE_CONTENT_REQUEST_SUCCESS)
      requestsSinceStart++;
      console.log('requestsSinceStart', requestsSinceStart);
      return payload
    default:
      return state
  }
}
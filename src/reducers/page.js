import * as types from '../actions/actionTypes'

const intitialState = {
  data: [],
  included: []
}

let requestsSinceBoot = 0;

export default (state = intitialState, { type, payload }) => {
  switch (type) {
    case types.PAGE_CONTENT_REQUEST_SUCCESS:
      console.log(types.PAGE_CONTENT_REQUEST_SUCCESS)
      requestsSinceBoot++;
      console.log('requestsSinceBoot', requestsSinceBoot);
      return payload
    default:
      return state
  }
}
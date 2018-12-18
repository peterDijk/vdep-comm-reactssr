import * as types from '../actions/actionTypes'

const intitialState = {
  data: [],
  included: []
}

export default (state = intitialState, { type, payload }) => {
  switch (type) {
    case types.PAGE_CONTENT_REQUEST_SUCCESS:
      console.log(types.PAGE_CONTENT_REQUEST_SUCCESS)
      return payload
    default:
      return state
  }
}
import * as types from '../actions/actionTypes'

export default (state = [], { type, payload }) => {
  switch (type) {
    case types.SEMINARS_REQUEST_SUCCESS:
      return payload
    default:
      return state
  }
}
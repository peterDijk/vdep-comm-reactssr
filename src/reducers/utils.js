import * as types from '../actions/actionTypes'

const initialState = {
  initialized: false,
  loading: false,
  error: null
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case types.INITIALIZE_SERVER_SUCCESS:
      console.log(types.INITIALIZE_SERVER_SUCCESS)
      return { ...state, initialized: true }
    default:
      return state
  }
}
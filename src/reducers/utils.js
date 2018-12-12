import * as types from '../actions/constants'

const initialState = {
  initialized: false,
  loading: false,
  error: null
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case types.INITIALIZE_SUCCESS:
      return { ...state, initialized: true }
    default:
      return state
  }
}
import * as types from './actionTypes'

function reduxServerInitSuccess() {
  return { type: types.INITIALIZE_SERVER_SUCCESS }
}

export const reduxInit = () => (dispatch) => {
  dispatch({ type: types.INITIALIZE_SERVER_REQUEST })
  dispatch( reduxServerInitSuccess() )
}
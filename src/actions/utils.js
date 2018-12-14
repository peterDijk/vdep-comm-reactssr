import * as types from './actionTypes'

function reduxInitSuccess() {
  return { type: types.INITIALIZE_SUCCESS }
}

export const reduxInit = () => (dispatch) => {
  dispatch({ type: types.INITIALIZE })
  dispatch( reduxInitSuccess() )
}
import * as types from './constants'

export function reduxInit() {
  console.log('from action creator')
  return { type: types.INITIALIZE }
}
import * as types from './constants'

export const requestPage = (slug) => {
  console.log('from requestPage action creator')
  return { 
    type: types.PAGE_CONTENT_REQUEST, payload: slug 
  }
}
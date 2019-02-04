import * as types from './actionTypes'
import * as constants from '../constants'
import axios from 'axios'
import { requestSeminars } from './seminars'

// export const requestPage = (slug) => {
//   console.log('from requestPage action creator')
//   return { 
//     type: types.PAGE_CONTENT_REQUEST, payload: slug 
//   }
// }

const pageRequestSucces = (data) => ({
  type: types.PAGE_CONTENT_REQUEST_SUCCESS,
  payload: data
})

export const requestPage = (slug = 'home') => async (dispatch, getState) => {
  const url = `${constants.contentDomain}/cms/jsonapi/node/page?include=field_sections,field_header,field_header.field_background_image&filter[page][condition][path]=field_slug&filter[page][condition][value]=${slug}`
  try {
    
    const request = await apiRequest(url, 'GET')
    
    dispatch( pageRequestSucces(request.data) )
    
  } catch(err) {
    console.error(err)
    // dispatch failure
  }
}

function apiRequest(url, method) {
  return axios({
    method,
    url
  })
}
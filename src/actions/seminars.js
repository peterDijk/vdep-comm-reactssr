import * as types from './actionTypes'
import * as constants from '../constants'
import axios from 'axios'
import moment from 'moment'

const seminarsRequestSucces = data => ({
  type: types.SEMINARS_REQUEST_SUCCESS,
  payload: data
})

export const requestSeminars = () => async (dispatch, getState) => {
  const now = moment().format("YYYY-MM-DD")
  const url = `${constants.contentDomain}/cms/jsonapi/node/seminar?filter[laterthennow][condition][path]=field_start_date&filter[laterthennow][condition][operator]=%3E&filter[laterthennow][condition][value]=${now}&include=field_image`
  // console.log(url);
  try {
    
    const request = await apiRequest(url, 'GET')
    
    dispatch( seminarsRequestSucces(request.data) )
    
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
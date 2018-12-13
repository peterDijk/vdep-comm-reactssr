import * as types from './constants'

export const requestPage = (slug) => ({ type: types.PAGE_CONTENT_REQUEST, payload: slug })
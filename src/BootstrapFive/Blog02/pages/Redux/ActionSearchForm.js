import { actionTypes } from './ActionTypes'

export const ActionSearchForm = (query) => (
  {
    type: actionTypes.BLOG_TWO_SEARCH_FORM,
    query: query
  }
)
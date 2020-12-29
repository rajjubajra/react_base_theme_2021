import { actionTypes } from './ActionTypes'

export const ActionSearchForm = (query) => (
  {
    type: actionTypes.BLOG_ONE_SEARCH_FORM,
    query: query
  }
)
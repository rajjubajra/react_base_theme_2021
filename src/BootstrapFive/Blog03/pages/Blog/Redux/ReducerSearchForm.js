import { actionTypes } from './ActionTypes';

const initialState = {
  query: ''
}

export const ReducerSearchForm = (state = initialState, action) => {

  switch (action.type) {
    case actionTypes.BLOG_THREE_SEARCH_FORM:
      return state = {
        query: action.query
      }
    /** default state */
    default:
      return state;
  }

}




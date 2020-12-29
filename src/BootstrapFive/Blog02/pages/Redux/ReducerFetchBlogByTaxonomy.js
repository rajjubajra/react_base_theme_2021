const { actionTypes } = require('./ActionTypes');

const initalState = {
  start_fetching: false,
  fetched: false,
  fetch_error: '',
  data: [],
  dataLength: 0,
  taxoId: 0,
}

export const ReducerFetchBlogByTaxonomy = (state = initalState, action) => {

  switch (action.type) {
    case actionTypes.BLOG_TWO_BY_TAXONOMY_FETCHING:
      return {
        fetching: true
      }
    /** FETCH DATA FOR Music menu page */
    case actionTypes.BLOG_TWO_BY_TAXONOMY_FETCHED:
      // console.log('DATA REDUCER menu', action.data);
      return {
        fetched: true,
        data: action.data,
        dataLength: action.data.length,
        taxoId: action.taxoId
      }
    case actionTypes.BLOG_TWO_BY_TAXONOMY_FETCH_ERROR:
      return {
        fetched: false,
        fetching: false,
        error: action.error
      }
    /** default state */
    default:
      return state;
  }
}
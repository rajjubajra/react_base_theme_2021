const { actionTypes } = require('./ActionTypes');

const initalState = {
  start_fetching: false,
  fetched: false,
  fetch_error: '',
  data: [],
  dataLength: 0,
}

export const ReducerFetchPopularBlog = (state = initalState, action) => {

  switch (action.type) {
    case actionTypes.BLOG_ONE_POPULAR_FETCHING:
      return {
        fetching: true
      }
    /** FETCH DATA FOR Music menu page */
    case actionTypes.BLOG_ONE_POPULAR_FETCHED:
      console.log('DATA REDUCER menu', action.data);
      return {
        fetched: true,
        data: action.data,
        dataLength: action.data.length
      }
    case actionTypes.BLOG_ONE_POPULAR_FETCH_ERROR:
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
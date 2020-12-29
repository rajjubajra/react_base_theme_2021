const { actionTypes } = require('./ActionTypes');

const initalState = {
  start_fetching: false,
  fetched: false,
  fetch_error: '',
  data: [],
  dataLength: 0,
}

export const ReducerFetchReadMore = (state = initalState, action) => {

  switch (action.type) {
    case actionTypes.BLOG_ONE_READ_MORE_FETCHING:
      return {
        fetching: true
      }
    /** FETCH DATA FOR Music menu page */
    case actionTypes.BLOG_ONE_READ_MORE_FETCHED:
      console.log('DATA REDUCER READMORE', action.data);
      return {
        fetched: true,
        data: action.data,
        dataLength: action.data.length
      }
    case actionTypes.BLOG_ONE_READ_MORE_FETCH_ERROR:
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
const { actionTypes } = require('./ActionTypes');

const initalState = {
  start_fetching: false,
  fetched: false,
  fetch_error: '',
  data: [],
  dataLength: 0,
}

export const reducerFetchAbout = (state = initalState, action) => {

  switch (action.type) {
    case actionTypes.START_FETCHING_ABOUT:
      return {
        fetching: true
      }
    /** FETCH DATA FOR Music main page */
    case actionTypes.FETCHED_ABOUT:
      return {
        fetched: true,
        data: action.data,
        dataLength: action.data.length
      }
    case actionTypes.FETCHE_ABOUT_ERROR:
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




const { actionTypes } = require('./actionTypes');

const initalState = {
  start_fetching: false,
  fetched: false,
  fetch_error: '',
  data: [],
  payload: [],
  dataLength: 0,
  linkPrefix: 'b4-business-two-'
}

export const reducerFetchMenu = (state = initalState, action) => {

  switch (action.type) {
    case actionTypes.START_FETCHING_MENU_BUSINESS_ONE:
      return {
        fetching: true
      }
    /** FETCH DATA FOR Music menu page */
    case actionTypes.FETCHED_MENU_BUSINESS_ONE:
      //console.log('DATA REDUCER menu', action.data);
      let arr = [];
      action.data.forEach(function (item) {
        arr.push({
          id: item.key,
          name: item.title,
          path: 'b4-business-one-' + item.uri.replace('base:', ''),
          component: item.uri.replace('base:', ''),
          weight: item.weight,
          url: item.relative
        })
      })
      return {
        fetched: true,
        payload: action.data,
        data: arr,
        dataLength: action.data.length
      }
    case actionTypes.FETCH_ERROR_MENU_BUSINESS_ONE:
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
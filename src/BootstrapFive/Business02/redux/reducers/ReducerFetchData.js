const { actionTypes } = require('../actions/ActionTypes');

const initalState = {
  start_fetching: false,
  fetched: false,
  fetch_error: '',
  data: [],
  dataLength: 0,
  payload: '',
  payloadLength: 0
}

export const reducerFetchData = (state = initalState, action) => {

  switch (action.type) {
    case actionTypes.START_FETCHING:
      return {
        fetching: true
      }
    /** FETCH DATA FOR Music main page */
    case actionTypes.FETCHED:
      console.log('DATA REDUCER', action.data);
      let arr = [];
      action.data.forEach(function (item) {
        arr.push({
          title: item.title[0].value,
          images: item.field_example_image,
          text: item.field_example_text[0].value,
          uuid: item.uuid[0].value
        })
      })
      return {
        fetched: true,
        payload: arr,
        data: action.data,
        dataLength: action.data.length
      }
    case actionTypes.FETCH_ERROR:
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




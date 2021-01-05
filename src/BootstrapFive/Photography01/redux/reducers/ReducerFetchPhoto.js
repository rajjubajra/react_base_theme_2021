const { actionTypes } = require('../actions/ActionTypes');

const initalState = {
  photo_fetching: false,
  photo_fetched: false,
  photo_fetch_error: '',
  photo: '',
  dataLength: 0,
  payload: '',
  payloadLength: 0
}

export const reducerFetchPhoto = (state = initalState, action) => {

  switch (action.type) {
    case actionTypes.START_PHOTO_FETCHING:
      return {
        photo_fetching: true
      }
    /** FETCH DATA FOR Music main page */
    case actionTypes.PHOTO_FETCHED:
      console.log('PHOTO REDUCER', action.data);
      let arr = [];
      // action.data.forEach(function (item) {
      //   arr.push({
      //     title: item.title[0].value,
      //     images: item.field_example_image,
      //     text: item.field_example_text[0].value,
      //     uuid: item.uuid[0].value
      //   })
      // })
      return {
        photo_fetched: true,
        payload: arr,
        photo: action.data,
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




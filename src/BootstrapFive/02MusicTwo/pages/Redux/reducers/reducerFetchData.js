const { actionTypes } = require("../actions/actionType")

const initalState = {
  payload: [],
  fetching: false,
  fetched: false,
  error: '',
  data: [],
  tracks: [],
  albumId: '',
  dataLength: 0,
}

export const reducerFetchData = (state = initalState, action) => {

  switch (action.type) {
    case actionTypes.START_FETCHING:
      return {
        fetching: true
      }
    /** FETCH DATA FOR Music main page */
    case actionTypes.FETCHED:
      console.log('reducer', action.data);
      let arr = [];
      action.data.forEach(function (item) {
        arr.push({
          url: item.field_image_medium[0].url,
          alt: item.field_image_medium[0].alt,
          uuid: item.uuid[0].value,
          body: item.body[0].value
        })
      })
      return {
        fetched: true,
        payload: arr,
        data: action.data,
        dataLength: action.data.length
      }
    /** FETCH DATA FOR Music/Album Detail with tracks page  */
    case actionTypes.FETCH_ALBUM:
      console.log("reducer id", action.id)
      return {
        albumId: action.id,
        tracks: state.data[action.id].field_track,
        coverImage: state.data[action.id].field_image_medium[0]
      }
    /** Error */
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




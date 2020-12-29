const { ActionMusicThreeTypes } = require('./ActionMusicThreeTypes');

const initalState = {
  start_fetching: false,
  fetched: false,
  fetch_error: '',
  data: [],
  dataLength: 0,
  payload: '',
  payloadLength: 0
}

export const ReducerMusicThree = (state = initalState, action) => {

  switch (action.type) {
    case ActionMusicThreeTypes.FETCHING_MUSIC_THREE_ALBUM:
      return {
        fetching: true
      }
    /** FETCH DATA FOR Music main page */
    case ActionMusicThreeTypes.FETCHED_MUSIC_THREE_ALBUM:
      console.log('DATA REDUCER', action.data);
      let arr = [];
      action.data.forEach(function (item) {
        arr.push({
          title: item.title[0].value,
          image: item.field_image_medium[0],
          text: item.body[0].value,
          nid: item.nid[0].value,
          tracks: item.field_track
        })
      })
      return {
        fetched: true,
        payload: arr,
        data: action.data,
        dataLength: action.data.length
      }
    case ActionMusicThreeTypes.FETCH_MUSIC_THREE_ERROR:
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




const { ActionMusicThreeTypes } = require('./ActionMusicThreeTypes');

const initalState = {
  start_fetching: false,
  fetched: false,
  fetch_error: '',
  title: '',
  image: '',
  text: '',
  nid: '',
  tracks: [],
  data: '',
}

export const ReducerMusicThreePlayList = (state = initalState, action) => {

  switch (action.type) {
    case ActionMusicThreeTypes.FETCHING_MUSIC_THREE_TRACK_LIST:
      return {
        fetching: true
      }
    /** FETCH DATA FOR Music main page */
    case ActionMusicThreeTypes.FETCHED_MUSIC_THREE_TRACK_LIST:
      console.log('DATA REDUCER', action.data);
      return {
        fetched: true,
        title: action.data.title,
        image: action.data.field_image_medium[0].url,
        text: action.data.body[0].value,
        nid: action.data.nid,
        tracks: action.data.field_track,
        data: action.data,
      }
    case ActionMusicThreeTypes.FETCH_MUSIC_THREE_TRACK_LIST_ERROR:
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




const { actionTypes } = require('./ActionTypes');

const albumInitialState = {
  fetching: false,
  fetched: false,
  fetch_error: false,
  album: [],
  body: [],
  title: [],
  tracks: [],
  buyFrom: [],
  listen: [],
  trackLength: 0,
  coverImage: [],
}

export const reducerFetchAlbum = (state = albumInitialState, action) => {

  switch (action.type) {
    case actionTypes.START_FETCHING_ALBUM:
      return {
        fetching: true
      }
    /** FETCH DATA FOR Music main page */
    case actionTypes.FETCHED_ALBUM:
      console.log(action.album);
      return {
        fetched: true,
        album: action.album,
        body: action.album.body,
        title: action.album.title,
        tracks: action.album.field_music_track,
        coverImage: action.album.field_track_cover_image,
        buyFrom: action.album.field_buy_from,
        listen: action.album.field_listen
      }
    case actionTypes.FETCH_ERROR_ALBUM:
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




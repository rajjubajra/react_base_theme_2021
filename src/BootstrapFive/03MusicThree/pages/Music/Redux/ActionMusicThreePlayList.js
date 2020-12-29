import { ActionMusicThreeTypes } from "./ActionMusicThreeTypes";
import axios from "axios";
import { baseUrl } from '../../../Config/dataurl';

export const ActionMusicThreePlayList = (nid) => {

  const URL = `${baseUrl.URL}/node/${nid}?_format=json`;

  return function (dispatch) {
    dispatch({
      type: ActionMusicThreeTypes.FETCHING_MUSIC_THREE_TRACK_LIST
    })

    axios({
      method: 'GET',
      url: URL,
      headers: {
        'Accept': 'application/vnd.api+json'
      }
    })
      .then((res) => {

        console.log("Music Three", res.data)

        dispatch({
          type: ActionMusicThreeTypes.FETCHED_MUSIC_THREE_TRACK_LIST,
          data: res.data
        })
      })
      .catch(err => {
        dispatch({
          type: ActionMusicThreeTypes.FETCH_MUSIC_THREE_TRACK_LIST_ERROR,
          fetched: false,
          error: err
        })
      })
  }
}






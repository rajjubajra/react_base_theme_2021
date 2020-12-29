import { ActionMusicThreeTypes } from "./ActionMusicThreeTypes";
import axios from "axios";
import { baseUrl } from '../../../Config/dataurl';

export const ActionMusicThree = () => {

  const URL = `${baseUrl.URL}/music_zero/albums?_format=json`;

  return function (dispatch) {
    dispatch({
      type: ActionMusicThreeTypes.FETCHING_MUSIC_THREE_ALBUM
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
          type: ActionMusicThreeTypes.FETCHED_MUSIC_THREE_ALBUM,
          data: res.data
        })
      })
      .catch(err => {
        dispatch({
          type: ActionMusicThreeTypes.FETCH_MUSIC_THREE_ERROR,
          fetched: false,
          error: err
        })
      })
  }
}






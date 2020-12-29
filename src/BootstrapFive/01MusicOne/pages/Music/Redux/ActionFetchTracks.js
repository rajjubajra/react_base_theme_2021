import { actionTypes } from "./ActionTypes"
import axios from "axios"
import { baseUrl } from '../../../Config/dataurl';

export const actionFetchTracks = () => {

  // const URL = restAPITracks.URL;
  const URL = `${baseUrl.URL}/music-track?_format=json`;

  return function (dispatch) {
    dispatch({
      type: actionTypes.START_FETCHING_TRAKCS
    })

    axios({
      method: 'GET',
      url: URL,
      headers: {
        'Accept': 'application/vnd.api+json'
      }
    })
      .then((res) => {
        console.log("TRACK FETCHED", res.data)
        console.log("track length", res.data.length);

        dispatch({
          type: actionTypes.FETCHED_TRACKS,
          data: res.data,
          dataLength: res.data.length
        })
      })
      .catch(err => {
        dispatch({
          type: actionTypes.FETCH_ERROR_TRACKS,
          fetched: false,
          error: err
        })
      })
  }
}



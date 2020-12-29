import { actionTypes } from "./ActionTypes"
import axios from "axios"
import { baseUrl } from '../../../Config/dataurl';

export const actionFetchAlbum = (nid) => {

  const URL = `${baseUrl.URL}/node/${nid}?_format=json`
  console.log("Album jsonuril", URL);

  return function (dispatch) {
    dispatch({
      type: actionTypes.START_FETCHING_ALBUM
    })

    axios({
      method: 'GET',
      url: URL,
      headers: {
        'Accept': 'application/vnd.api+json'
      }
    })
      .then((res) => {
        //console.log("ACTION", res.data)

        dispatch({
          type: actionTypes.FETCHED_ALBUM,
          album: res.data,
          albumLength: res.data.length
        })
      })
      .catch(err => {
        dispatch({
          type: actionTypes.FETCH_ERROR_ALBUM,
          fetched: false,
          error: err
        })
      })
  }

}




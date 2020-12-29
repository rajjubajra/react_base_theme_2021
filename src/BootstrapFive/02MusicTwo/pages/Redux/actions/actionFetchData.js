import { actionTypes } from "./actionType"
import axios from "axios"
import { albums } from '../../../Config/dataurl';

export const actionFetchData = () => {

  const albumsURL = albums.URL;

  return function (dispatch) {
    dispatch({
      type: actionTypes.START_FETCHING
    })

    axios({
      method: 'GET',
      url: albumsURL,
      headers: {
        'Accept': 'application/vnd.api+json'
      }
    })
      .then((res) => {
        console.log(res.data)

        dispatch({
          type: actionTypes.FETCHED,
          data: res.data
        })
      })
      .catch(err => {
        dispatch({
          type: actionTypes.FETCH_ERROR,
          fetched: false,
          error: err
        })
      })
  }
}






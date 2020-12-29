import { actionTypes } from "./ActionTypes"
import axios from "axios"
import { baseUrl } from '../../Config/dataurl';

export const actionFetchData = () => {

  const URL = `${baseUrl.URL}/coming_soon?_format=json`;

  return function (dispatch) {
    dispatch({
      type: actionTypes.START_FETCHING
    })

    axios({
      method: 'GET',
      url: URL,
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






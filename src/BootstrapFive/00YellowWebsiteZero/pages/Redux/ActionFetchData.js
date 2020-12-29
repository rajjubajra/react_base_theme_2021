import { actionTypes } from "./ActionTypes"
import axios from "axios"
import { baseUrl } from '../../Config/dataurl';

export const actionFetchData = () => {

  const URL = `${baseUrl.URL}/yellow-website-zero?_format=json`;
  console.log("yellow webiste zero action url", URL);

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

        console.log("yellow webiste zero", res.data[0])

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






import { actionTypes } from "./ActionTypes";
import axios from "axios";
import { baseUrl } from '../../../Config/dataurl';

export const actionFetchTour = () => {

  const URL = `${baseUrl.URL}/music-tour?_format=json`;

  return function (dispatch) {
    dispatch({
      type: actionTypes.START_FETCHING_TOUR
    })

    axios({
      method: 'GET',
      url: URL,
      headers: {
        'Accept': 'application/vnd.api+json'
      }
    })
      .then((res) => {
        //console.log("TOUR", res.data)
        //console.log("TOUR DT length", res.data.length);

        dispatch({
          type: actionTypes.FETCHED_TOUR,
          data: res.data,
          dataLength: res.data.length
        })
      })
      .catch(err => {
        dispatch({
          type: actionTypes.FETCH_ERROR_TOUR,
          fetched: false,
          error: err
        })
      })
  }
}
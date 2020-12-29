import { actionTypes } from "./ActionTypes";
import axios from "axios";
import { baseUrl } from '../../../Config/dataurl';

export const actionFetchTourDetails = (nid) => {

  const URL = `${baseUrl.URL}/node/${nid}?_format=json`;

  return function (dispatch) {
    dispatch({
      type: actionTypes.START_FETCHING_TOUR_DETAILS
    })

    axios({
      method: 'GET',
      url: URL,
      headers: {
        'Accept': 'application/vnd.api+json'
      }
    })
      .then((res) => {
        // console.log("TOUR detail", res.data)
        // console.log("TOUR details DT length", res.data.length);
        dispatch({
          type: actionTypes.FETCHED_TOUR_DETAILS,
          data: res.data,
          dataLength: res.data.length
        })
      })
      .catch(err => {
        dispatch({
          type: actionTypes.FETCH_ERROR_TOUR_DETAILS,
          fetched: false,
          error: err
        })
      })
  }
}


import { actionTypes } from './ActionTypes';
import axios from "axios"
import { baseUrl } from '../../../Config/dataurl';

export const actionFetchLandingPage = () => {

  const URL = `${baseUrl.URL}/landing-page?_format=json`;

  return function (dispatch) {
    dispatch({
      type: actionTypes.START_FETCHING_LANDING_PAGE
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
          type: actionTypes.FETCHED_LANDING_PAGE,
          data: res.data
        })
      })
      .catch(err => {
        dispatch({
          type: actionTypes.FETCHE_LANDING_PAGE_ERROR,
          fetched: false,
          error: err
        })
      })
  }
}






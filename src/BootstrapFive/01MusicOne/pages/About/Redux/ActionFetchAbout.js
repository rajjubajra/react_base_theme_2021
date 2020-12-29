import { actionTypes } from './ActionTypes';
import axios from "axios"
import { baseUrl } from '../../../Config/dataurl';

export const actionFetchAbout = () => {

  const URL = `${baseUrl.URL}/about-page?_format=json`;

  return function (dispatch) {
    dispatch({
      type: actionTypes.START_FETCHING_ABOUT
    })

    axios({
      method: 'GET',
      url: URL,
      headers: {
        'Accept': 'application/vnd.api+json'
      }
    })
      .then((res) => {
        // console.log(res.data);
        dispatch({
          type: actionTypes.FETCHED_ABOUT,
          data: res.data
        })
      })
      .catch(err => {
        dispatch({
          type: actionTypes.FETCHE_ABOUT_ERROR,
          fetched: false,
          error: err
        })
      })
  }
}






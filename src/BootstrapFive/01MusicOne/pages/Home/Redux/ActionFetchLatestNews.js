import { actionTypes } from './ActionTypes';
import axios from "axios"
import { baseUrl } from '../../../Config/dataurl';

export const actionFetchLatestNews = () => {

  const URL = `${baseUrl.URL}/latest-news?_format=json`;

  return function (dispatch) {
    dispatch({
      type: actionTypes.START_FETCHING_NEWS_LATEST
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
          type: actionTypes.FETCHED_NEWS_LATEST,
          data: res.data
        })
      })
      .catch(err => {
        dispatch({
          type: actionTypes.FETCHE_NEWS_LATEST_ERROR,
          fetched: false,
          error: err
        })
      })
  }
}






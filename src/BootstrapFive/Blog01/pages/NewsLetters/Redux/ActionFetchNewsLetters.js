import { actionTypes } from "./ActionTypes"
import axios from "axios"
import { baseUrl } from '../../../Config/dataurl';

export const ActionFetchNewsLetters = () => {



  return function (dispatch) {
    dispatch({
      type: actionTypes.BLOG_ONE_NEWS_FETCHING
    })

    axios({
      method: 'GET',
      url: `${baseUrl.URL}/news-letters?_format=json`,
      headers: {
        'Accept': 'application/vnd.api+json'
      }
    })
      .then((res) => {
        console.log("FETCH NEWS",
          `${baseUrl.URL}/news-letters`,
          res.data)
        dispatch({
          type: actionTypes.BLOG_ONE_NEWS_FETCHED,
          data: res.data
        })
      })
      .catch(err => {
        dispatch({
          type: actionTypes.BLOG_ONE_NEWS_FETCH_ERROR,
          fetched: false,
          error: err
        })
      })
  }
}
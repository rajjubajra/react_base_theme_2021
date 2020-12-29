import { actionTypes } from "./ActionTypes"
import axios from "axios"
import { baseUrl } from '../../../Config/dataurl';

export const ActionFetchPopularBlog = () => {



  return function (dispatch) {
    dispatch({
      type: actionTypes.BLOG_ONE_POPULAR_FETCHING
    })

    axios({
      method: 'GET',
      url: `${baseUrl.URL}/popular-blog?_format=json`,
      headers: {
        'Accept': 'application/vnd.api+json'
      }
    })
      .then((res) => {
        console.log("FETCH pop blog",
          `${baseUrl.URL}/popular-blog`,
          res.data)
        dispatch({
          type: actionTypes.BLOG_ONE_POPULAR_FETCHED,
          data: res.data
        })
      })
      .catch(err => {
        dispatch({
          type: actionTypes.BLOG_ONE_POPULAR_FETCH_ERROR,
          fetched: false,
          error: err
        })
      })
  }
}
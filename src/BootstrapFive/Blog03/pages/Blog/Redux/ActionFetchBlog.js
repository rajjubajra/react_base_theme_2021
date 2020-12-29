import { actionTypes } from "./ActionTypes"
import axios from "axios"
import { baseUrl } from '../../../Config/dataurl';

export const ActionFetchBlog = (year, month) => {

  const url = year === '' && month === ''
    ? `${baseUrl.URL}/blog`
    : `${baseUrl.URL}/blog/${year}${month}`;

  console.log("ACTION URL", url);

  return function (dispatch) {
    dispatch({
      type: actionTypes.BLOG_THREE_BLOG_FETCHING
    })

    axios({
      method: 'GET',
      url: `${url}`,
      headers: {
        'Accept': 'application/vnd.api+json'
      }
    })
      .then((res) => {
        //console.log("FETCH ACTION", res.data)
        dispatch({
          type: actionTypes.BLOG_THREE_BLOG_FETCHED,
          data: res.data
        })
      })
      .catch(err => {
        dispatch({
          type: actionTypes.BLOG_THREE_BLOG_FETCH_ERROR,
          fetched: false,
          error: err
        })
      })
  }
}
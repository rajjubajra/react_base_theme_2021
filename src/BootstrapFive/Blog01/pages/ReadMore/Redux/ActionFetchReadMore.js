import { actionTypes } from "./ActionTypes"
import axios from "axios"
import { baseUrl } from '../../../Config/dataurl';

export const ActionFetchReadMore = (nid) => {


  return function (dispatch) {
    dispatch({
      type: actionTypes.BLOG_ONE_READ_MORE_FETCHING
    })

    axios({
      method: 'GET',
      url: `${baseUrl.URL}/readmore/${nid}?_format=json`,
      headers: {
        'Accept': 'application/vnd.api+json'
      }
    })
      .then((res) => {
        console.log("FETCH READ MORE", res)
        dispatch({
          type: actionTypes.BLOG_ONE_READ_MORE_FETCHED,
          data: res.data
        })
      })
      .catch(err => {
        dispatch({
          type: actionTypes.BLOG_ONE_READ_MORE_FETCH_ERROR,
          fetched: false,
          error: err
        })
      })
  }
}
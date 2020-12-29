import { actionTypes } from "./ActionTypes"
import axios from "axios"
import { baseUrl } from '../../../Config/dataurl';

export const ActionFetchTaxonomy = (nid) => {


  return function (dispatch) {
    dispatch({
      type: actionTypes.BLOG_THREE_TAXONOMY_FETCHING
    })

    axios({
      method: 'GET',
      url: `${baseUrl.URL}/taxonomy?_format=json`,
      headers: {
        'Accept': 'application/vnd.api+json'
      }
    })
      .then((res) => {
        console.log("FETCH READ MORE", res)
        dispatch({
          type: actionTypes.BLOG_THREE_TAXONOMY_FETCHED,
          data: res.data
        })
      })
      .catch(err => {
        dispatch({
          type: actionTypes.BLOG_THREE_TAXONOMY_FETCH_ERROR,
          fetched: false,
          error: err
        })
      })
  }
}
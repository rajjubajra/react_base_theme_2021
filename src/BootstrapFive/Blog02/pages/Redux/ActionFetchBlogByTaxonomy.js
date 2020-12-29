import { actionTypes } from "./ActionTypes"
import axios from "axios"
import { baseUrl } from '../../../Config/dataurl';

export const ActionFetchBlogByTaxonomy = (tid, year, month) => {


  const byMonth = `${baseUrl.URL}/blog-by-taxonomy/${tid}/${year}${month}?_format=json`;
  const all = `${baseUrl.URL}/blog-by-taxonomy/${tid}?_format=json`;
  const url = year === '' && month === '' ? all : byMonth;

  console.log("ACTION URL", url);


  return function (dispatch) {
    dispatch({
      type: actionTypes.BLOG_TWO_BY_TAXONOMY_FETCHING
    })

    axios({
      method: 'GET',
      url: url,
      headers: {
        'Accept': 'application/vnd.api+json'
      }
    })
      .then((res) => {
        console.log("FETCH ACTION", res.data)
        dispatch({
          type: actionTypes.BLOG_TWO_BY_TAXONOMY_FETCHED,
          data: res.data,
          taxoId: tid
        })
      })
      .catch(err => {
        dispatch({
          type: actionTypes.BLOG_TWO_BY_TAXONOMY_FETCH_ERROR,
          fetched: false,
          error: err
        })
      })
  }
}
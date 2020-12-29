import { actionTypes } from "./actionTypes"
import axios from "axios"
import { baseUrl } from '../../../../Config/dataurl';

export const actionFetchMenu = () => {


  return function (dispatch) {

    dispatch({
      type: actionTypes.START_FETCHING_MENU_BUSINESS_ONE
    })

    axios({
      method: 'GET',
      url: `${baseUrl.URL}/api/menu_items/business-site-menu`,
      headers: {
        'Accept': 'application/vnd.api+json'
      }
    })
      .then((res) => {
        console.log("MENU BUSINESS", res.data)
        dispatch({
          type: actionTypes.FETCHED_MENU_BUSINESS_ONE,
          data: res.data
        })
      })
      .catch(err => {
        dispatch({
          type: actionTypes.FETCH_ERROR_MENU_BUSINESS_ONE,
          fetched: false,
          error: err
        })
      })
  }
}
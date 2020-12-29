import { actionTypes } from "./actionTypes"
import axios from "axios"
import { baseUrl } from '../../../../Config/dataurl';

export const actionFetchMenu = () => {


  return function (dispatch) {

    dispatch({
      type: actionTypes.START_FETCHING_MENU_BUSINESS_TWO
    })

    axios({
      method: 'GET',
      url: `${baseUrl.URL}/api/menu_items/business-two`,
      headers: {
        'Accept': 'application/vnd.api+json'
      }
    })
      .then((res) => {
        console.log("MENU BUSINESS", res.data)
        dispatch({
          type: actionTypes.FETCHED_MENU_BUSINESS_TWO,
          data: res.data
        })
      })
      .catch(err => {
        dispatch({
          type: actionTypes.FETCH_ERROR_MENU_BUSINESS_TWO,
          fetched: false,
          error: err
        })
      })
  }
}
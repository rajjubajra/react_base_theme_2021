import { actionTypes } from "./ActionTypes"
import axios from "axios"
import { photourl } from '../../Config/dataurl';

export const actionFetchPhoto = () => {

  const URL = photourl.PHOTOURL;
  const SubId = 16; //Taxonomy target_id = 15 for "Travel" photo

  return function (dispatch) {
    dispatch({
      type: actionTypes.START_PHOTO_FETCHING
    })

    axios({
      method: 'GET',
      url: URL,
      headers: {
        'Accept': 'application/vnd.api+json'
      }
    })
      .then((res) => {
        console.log("ACTION DATA", res.data)
        let arr = [];
        res.data.forEach(elm => {
          if (elm.field_placeholder_photo_tag[0].target_id === SubId) {
            // eslint-disable-next-line no-lone-blocks
            {
              elm.field_photo_placeholder.map(item => {
                return arr.push({
                  url: item.url,
                  alt: item.alr
                })
              })
            }
          }
        })
        dispatch({
          type: actionTypes.PHOTO_FETCHED,
          data: arr
        })
      })
      .catch(err => {
        dispatch({
          type: actionTypes.PHOTO_FETCH_ERROR,
          fetched: false,
          error: err
        })
      })
  }
}
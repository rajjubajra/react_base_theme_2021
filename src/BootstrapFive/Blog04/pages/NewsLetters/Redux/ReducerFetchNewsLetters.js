const { actionTypes } = require('./ActionTypes');

const initalState = {
  start_fetching: false,
  fetched: false,
  fetch_error: '',
  data: [],
  payload: [],
  dataLength: 0,
}

export const ReducerFetchNewsLetters = (state = initalState, action) => {

  switch (action.type) {
    case actionTypes.BLOG_ONE_NEWS_FETCHING:
      return {
        fetching: true
      }
    /** FETCH DATA FOR Music menu page */
    case actionTypes.BLOG_ONE_NEWS_FETCHED:
      console.log('DATA REDUCER menu', action.data);
      let arr = [];
      action.data.map(item => {
        arr.push({
          nid: item.nid[0].value,
          title: item.title[0].value,
          body: item.body[0].processed,
          created: item.created[0].value,
          imageUrl: item.field_image[0].url,
          imageAlt: item.field_image[0].alt
        })
      })
      return {
        fetched: true,
        data: action.data,
        payload: arr,
        dataLength: action.data.length
      }
    case actionTypes.BLOG_ONE_NEWS_FETCH_ERROR:
      return {
        fetched: false,
        fetching: false,
        error: action.error
      }
    /** default state */
    default:
      return state;
  }
}
const { actionTypes } = require('./ActionTypes');

const initialState = {
  fetching: false,
  fetched: false,
  fetch_error: '',
  data: [],
  dataLength: 0,
}

export const reducerFetchTour = (state = initialState, action) => {

  switch (action.type) {
    case actionTypes.START_FETCHING_TOUR:
      return {
        fetching: true
      }
    /** FETCH DATA FOR Music main page */
    case actionTypes.FETCHED_TOUR:
      console.log('DATA REDUCER !!!', action.data);
      let arr = [];
      action.data.forEach(function (item) {
        arr.push({
          nid: item.nid.length > 0 && item.nid[0].value,
          title: item.title.length > 0 && item.title[0].value,
          date: item.field_event_date.length > 0 && item.field_event_date[0].value,
          addressLineOne: item.field_address_line_1.length > 0 && item.field_address_line_1[0].value,
          addressLineTwo: item.field_address_line_2.length > 0 && item.field_address_line_2[0].value,
          location: item.field_event_location.length > 0 && item.field_event_location[0].value,
          details: item.field_details.length > 0 && item.field_details[0].value,
          buyTicketTitle: item.field_buy_ticket[0].title,
          buyTicketUri: item.field_buy_ticket[0].uri
        })
      })
      return {
        fetched: true,
        payload: arr,
        data: action.data,
        dataLength: action.dataLength
      }
    case actionTypes.FETCH_ERROR_TOUR:
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




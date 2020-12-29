const { actionTypes } = require('./ActionTypes');

const initialState = {
  fetching: false,
  fetched: false,
  fetch_error: '',
  title: '',
  eventDate: '',
  location: '',
  addressLineOne: '',
  addressLineTwo: '',
  nid: 0,
  details: '',
  ticket: '',
  buyTicketUri: '',
  hideTourPlan: false
}

export const reducerFetchTourDetails = (state = initialState, action) => {

  switch (action.type) {
    case actionTypes.START_FETCHING_TOUR_DETAILS:
      return {
        fetching: true
      }
    /** FETCH DATA FOR Music main page */
    case actionTypes.FETCHED_TOUR_DETAILS:
      console.log('DATA REDUCER !!!', action.data.nid[0].value);
      return {
        fetched: true,
        title: action.data.title[0].value,
        eventDate: action.data.field_event_date[0].value,
        location: action.data.field_event_location[0].value,
        addressLineOne: action.data.field_address_line_1[0].value,
        addressLineTwo: action.data.field_address_line_2[0].value,
        nid: action.data.nid[0].value,
        details: action.data.field_details[0].value,
        ticket: action.data.field_buy_ticket[0].title,
        buyTicketUri: action.data.field_buy_ticket[0].uri,
      }
    case actionTypes.FETCH_ERROR_TOUR_DETAILS:
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




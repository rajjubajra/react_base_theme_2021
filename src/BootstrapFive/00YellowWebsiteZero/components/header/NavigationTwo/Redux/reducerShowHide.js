const { actionTypes } = require('./ActionTypes');

const initalState = {
  view: true
}

export const reducerShowHide = (state = initalState, action) => {

  switch (action.type) {
    case actionTypes.MAIN_MENU_VIEW:
      return {
        view: state.view === true ? false : true
      }
    case actionTypes.FETCH_ERROR:
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




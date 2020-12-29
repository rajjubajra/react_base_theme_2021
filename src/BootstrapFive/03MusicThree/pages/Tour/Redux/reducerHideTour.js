const { actionTypes } = require('./ActionTypes');

const initialState = {
  hide: false
}

export const reducerHideTour = (state = initialState, action) => {

  switch (action.type) {
    case actionTypes.HIDE_TOUR_PLAN:
      return {
        hide: action.hide
      }
    /** default state */
    default:
      return state;
  }

}




import { actionTypes } from '../actions/ActionTypes';


const initialState = {
  pager: 0
}

export const ReducerPager = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GO_BACK_TO_THE_PAGE:
      return {
        pager: action.pager
      }

    default:
      return state;
  }
}

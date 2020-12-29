import { actionTypes } from './ActionTypes';

const initialState = {
  month: '',
  year: '',
  validation: false,
}

export const ReducerBlogSelectedDate = (state = initialState, action) => {

  switch (action.type) {
    case actionTypes.BLOG_TWO_SELECTED_MONTH:
      return state = {
        month: action.month,
        year: state.year,
      }
    case actionTypes.BLOG_TWO_SELECTED_YEAR:
      return state = {
        year: action.year,
        month: state.month,
      }
    /** default state */
    default:
      return state;
  }

}




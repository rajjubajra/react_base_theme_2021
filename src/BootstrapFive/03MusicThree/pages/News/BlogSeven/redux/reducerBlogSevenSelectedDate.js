import { BlogSevenActionTypes } from './BlogSevenActionTypes';

const initialState = {
  month: '',
  year: ''
}

export const reducerBlogSevenSelectedDate = (state = initialState, action) => {

  switch (action.type) {
    case BlogSevenActionTypes.BLOG_SEVEN_SELECTED_MONTH:
      return state = {
        month: action.month,
        year: state.year,
      }
    case BlogSevenActionTypes.BLOG_SEVEN_SELECTED_YEAR:
      return state = {
        year: action.year,
        month: state.month
      }
    /** default state */
    default:
      return state;
  }

}




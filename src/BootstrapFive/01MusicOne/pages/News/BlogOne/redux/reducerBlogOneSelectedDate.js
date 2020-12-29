import { BlogOneActionTypes } from './BlogOneActionTypes';

const initialState = {
  month: '',
  year: ''
}

export const reducerBlogOneSelectedDate = (state = initialState, action) => {

  switch (action.type) {
    case BlogOneActionTypes.BLOG_ONE_SELECTED_MONTH:
      return state = {
        month: action.month,
        year: state.year,
      }
    case BlogOneActionTypes.BLOG_ONE_SELECTED_YEAR:
      return state = {
        year: action.year,
        month: state.month
      }
    /** default state */
    default:
      return state;
  }

}




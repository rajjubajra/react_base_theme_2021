import { BlogSevenActionTypes } from './BlogSevenActionTypes';

const initialState = {
  currentPage: 0,
  lastPage: 0,
  dataLength: 0,
}

export const reducerBlogSevenPages = (state = initialState, action) => {

  switch (action.type) {
    case BlogSevenActionTypes.BLOG_SEVEN_PAGES:
      return state = {
        currentPage: state.currentPage,
        lastPage: action.pageGap,
        dataLength: action.dataLength
      }
    case BlogSevenActionTypes.BLOG_SEVEN_NEXT_PAGE:
      return state = {
        currentPage: action.currentPage,
        lastPage: action.lastPage,
      }
    case BlogSevenActionTypes.BLOG_SEVEN_PREV_PAGE:
      return state = {
        currentPage: action.currentPage,
        lastPage: action.lastPage
      }
    case BlogSevenActionTypes.BLOG_SEVEN_PAGE_RESET:
      return state = {
        currentPage: action.currentPage,
        lastPage: action.lastPage,
        dataLength: action.dataLength
      }
    /** default state */
    default:
      return state;
  }

}




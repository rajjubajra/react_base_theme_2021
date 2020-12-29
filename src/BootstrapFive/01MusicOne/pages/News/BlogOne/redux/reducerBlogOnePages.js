import { BlogOneActionTypes } from './BlogOneActionTypes';

const initialState = {
  currentPage: 0,
  lastPage: 0,
  dataLength: 0,
}

export const reducerBlogOnePages = (state = initialState, action) => {

  switch (action.type) {
    case BlogOneActionTypes.BLOG_ONE_PAGES:
      return state = {
        currentPage: state.currentPage,
        lastPage: action.pageGap,
        dataLength: action.dataLength
      }
    case BlogOneActionTypes.BLOG_ONE_NEXT_PAGE:
      return state = {
        currentPage: action.currentPage,
        lastPage: action.lastPage,
      }
    case BlogOneActionTypes.BLOG_ONE_PREV_PAGE:
      return state = {
        currentPage: action.currentPage,
        lastPage: action.lastPage
      }
    case BlogOneActionTypes.BLOG_ONE_PAGE_RESET:
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




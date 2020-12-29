import { BlogSevenActionTypes } from './BlogSevenActionTypes';

export const BlogSevenActionPages = (dataLength, pageGap) => {
  return {
    type: BlogSevenActionTypes.BLOG_SEVEN_PAGES,
    dataLength: dataLength,
    pageGap: pageGap
  }
}

export const BlogSevenBackToPages = (currentPage, lastPage, pageGap) => {
  return {
    type: BlogSevenActionTypes.BLOG_SEVEN_BACK_TO_PAGES,
    currentPage: currentPage,
    lastPage: lastPage,
    pageGap: pageGap,
  }
}

export const BlogSevenActionNextPage = (currentPage, lastPage, pageGap, dataLength) => {
  //console.log(currentPage, lastPage, pageGap, dataLength, "action next");
  return function (dispatch) {
    dispatch({
      type: BlogSevenActionTypes.BLOG_SEVEN_NEXT_PAGE,
      currentPage: currentPage + pageGap,
      lastPage: lastPage + pageGap
    })

  }
}

export const BlogSevenActionPrevPage = (currentPage, lastPage, pageGap, dataLength) => {
  return {
    type: BlogSevenActionTypes.BLOG_SEVEN_PREV_PAGE,
    dataLength: dataLength,
    currentPage: currentPage - pageGap,
    lastPage: lastPage - pageGap,
  }
}

export const BlogSevenActionPageReset = (dataLength, pageGap) => (
  {
    type: BlogSevenActionTypes.BLOG_SEVEN_PAGE_RESET,
    currentPage: 0,
    lastPage: pageGap,
    dataLength: dataLength
  }
)
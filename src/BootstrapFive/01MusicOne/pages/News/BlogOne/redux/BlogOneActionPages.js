import { BlogOneActionTypes } from './BlogOneActionTypes';

export const BlogOneActionPages = (dataLength, pageGap) => {
  return {
    type: BlogOneActionTypes.BLOG_ONE_PAGES,
    dataLength: dataLength,
    pageGap: pageGap
  }
}

export const BlogOneBackToPages = (currentPage, lastPage, pageGap) => {
  return {
    type: BlogOneActionTypes.BLOG_ONE_BACK_TO_PAGES,
    currentPage: currentPage,
    lastPage: lastPage,
    pageGap: pageGap,
  }
}

export const BlogOneActionNextPage = (currentPage, lastPage, pageGap, dataLength) => {
  //console.log(currentPage, lastPage, pageGap, dataLength, "action next");
  return function (dispatch) {
    dispatch({
      type: BlogOneActionTypes.BLOG_ONE_NEXT_PAGE,
      currentPage: currentPage + pageGap,
      lastPage: lastPage + pageGap
    })

  }
}

export const BlogOneActionPrevPage = (currentPage, lastPage, pageGap, dataLength) => {
  return {
    type: BlogOneActionTypes.BLOG_ONE_PREV_PAGE,
    dataLength: dataLength,
    currentPage: currentPage - pageGap,
    lastPage: lastPage - pageGap,
  }
}

export const BlogOneActionPageReset = (dataLength, pageGap) => (
  {
    type: BlogOneActionTypes.BLOG_ONE_PAGE_RESET,
    currentPage: 0,
    lastPage: pageGap,
    dataLength: dataLength

  }
)
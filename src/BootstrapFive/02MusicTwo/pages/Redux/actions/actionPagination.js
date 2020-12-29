import { actionTypes } from "./actionType";

export const actionPagination = (page, length) => (
  {
    type: actionTypes.PAGINATION,
    page: page,
    length: length
  }
)

export const actionGoToPage = (page) => (
  {
    type: actionTypes.GOTOPAGE,
    page: page
  }
)
import { actionTypes } from "../actions/actionType"

const initalstate = {
  page: 0,
  length: 0,
}

export const reducerPagination = (state = initalstate, action) => {
  switch (action.type) {
    case actionTypes.PAGINATION:
      console.log("pagination reducer", action.page, action.length);
      return {
        page: action.page === 'next'
          ? (action.length - 1) > state.page ? state.page + 1 : state.page
          : state.page > 0 ? state.page - 1 : state.page,
        length: action.length
      }
    case actionTypes.GOTOPAGE:
      return {
        page: action.page
      }
    default:
      return state;
  }
}
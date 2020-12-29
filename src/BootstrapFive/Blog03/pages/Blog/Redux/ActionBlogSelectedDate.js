import { actionTypes } from './ActionTypes';

export const ActionSelectedMonth = (month) => (
  {
    type: actionTypes.BLOG_THREE_SELECTED_MONTH,
    month: month
  }
)

export const ActionSelectedYear = (year) => (
  {
    type: actionTypes.BLOG_THREE_SELECTED_YEAR,
    year: year
  }
)


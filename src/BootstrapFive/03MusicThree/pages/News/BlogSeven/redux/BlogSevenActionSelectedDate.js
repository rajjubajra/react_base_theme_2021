import { BlogSevenActionTypes } from './BlogSevenActionTypes';

export const BlogSevenActionSelectedMonth = (month) => (
  {
    type: BlogSevenActionTypes.BLOG_SEVEN_SELECTED_MONTH,
    month: month
  }
)

export const BlogSevenActionSelectedYear = (year) => (
  {
    type: BlogSevenActionTypes.BLOG_SEVEN_SELECTED_YEAR,
    year: year
  }
)


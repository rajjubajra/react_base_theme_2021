import { BlogOneActionTypes } from './BlogOneActionTypes';

export const BlogOneActionSelectedMonth = (month) => (
  {
    type: BlogOneActionTypes.BLOG_ONE_SELECTED_MONTH,
    month: month
  }
)

export const BlogOneActionSelectedYear = (year) => (
  {
    type: BlogOneActionTypes.BLOG_ONE_SELECTED_YEAR,
    year: year
  }
)


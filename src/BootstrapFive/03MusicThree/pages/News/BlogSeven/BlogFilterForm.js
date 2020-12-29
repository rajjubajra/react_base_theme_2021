import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BlogSevenActionSelectedMonth, BlogSevenActionSelectedYear } from './redux/BlogSevenActionSelectedDate';


function BlogFilterForm(props) {

  const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]


  const dispatch = useDispatch();
  const selectedYear = useSelector(state => state.reducerBlogSevenSelectedDate.year);
  const selectedMonth = useSelector(state => state.reducerBlogSevenSelectedDate.month);


  return (
    <div className="container">
      <div className="row">

        <div className="form-row d-flex justify-content-center">

          <div className="form-group me-2">
            <label>Year</label>
            <select className="form-control"
              value={selectedYear}
              onChange={(e) => dispatch(BlogSevenActionSelectedYear(e.target.value))}
            >
              <option value="">Year</option>
              {
                props.year.map((item, index) => {
                  return <option key={index} value={item}>{item}</option>
                })
              }
            </select>
          </div>

          <div className="form-group">
            <label>Month</label>
            <select className="form-control"
              value={selectedMonth}
              onChange={(e) => dispatch(BlogSevenActionSelectedMonth(e.target.value))}
            >
              <option value="">Month</option>
              {
                props.month.map((item, index) => {
                  return <option key={index} value={item}>{month[item]}</option>
                })
              }
            </select>
          </div>

        </div>

      </div>
    </div>
  )
}

export default BlogFilterForm

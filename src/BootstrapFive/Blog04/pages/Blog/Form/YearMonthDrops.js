import React from 'react';
import { useDispatch } from 'react-redux';
import { ActionSelectedMonth, ActionSelectedYear } from '../Redux/ActionBlogSelectedDate';
// import { MonthName } from './MonthName';


function YearMonthDrops(props) {
  const dispatch = useDispatch();

  /**HOW IT WORKS */
  /**
   * 1 DROP OPTION PASS YEAR AND MONTH TO REDUCER
   * 2 data Fetching URL change with YYYYMM terms
   * 3 Drupal Contexual filter will sort data by selected Year and Month
   * 4 New data is udated to Reducer state 
   * 5 and same passed to Blog file 
   */



  // const data = useSelector(state => state.ReducerFetchBlog.data);
  // const fetched = useSelector(state => state.ReducerFetchBlog.fetched);

  // const [monthArr, setMonthArr] = useState([]);
  // const [yearArr, setYearArr] = useState([]);

  // useEffect(() => {
  //   let m = [];
  //   let y = [];
  //   fetched && data.map(item => {
  //     let dt = new Date(item.created[0].value)
  //     m.push(dt.getMonth())
  //     y.push(dt.getFullYear())
  //   })
  //   //set removing duplicate values
  //   setMonthArr([...new Set(m)]);
  //   setYearArr([...new Set(y)]);
  // }, [data, fetched])



  // console.log('month', props.month, 'year', props.year);

  const selectStyle = {
    fontSize: "clamp(0.75rem, 1vw, 1rem)",
    fontWeight: "100",
    border: "1px solid #ccc",
    margin: "0px 3px",
    padding: "3px 10px"
  }


  return (
    <div>
      <select
        style={selectStyle}
        name="year"
        value={props.year}
        onChange={(e) => dispatch(ActionSelectedYear(e.target.value))}
      >
        <option value="">-Year-</option>
        <option value="2020">2020</option>
        <option value="2019">2019</option>
        {/* {
          fetched && yearArr.map((item, index) => {
            return <option key={index} value={item}>
              {item}</option>
          })
        } */}
      </select>
      <select
        style={selectStyle}
        name="month"
        value={props.month}
        onChange={(e) => dispatch(ActionSelectedMonth(e.target.value))}
      >
        <option value="">-Month-</option>
        <option value="01">Jan</option>
        <option value="02">Feb</option>
        <option value="03">Mar</option>
        <option value="04">Apr</option>
        <option value="05">May</option>
        <option value="06">Jun</option>
        <option value="07">Jul</option>
        <option value="08">Aug</option>
        <option value="09">Sep</option>
        <option value="10">Oct</option>
        <option value="11">Nov</option>
        <option value="12">Dec</option>

        {/* {
          fetched && monthArr.map((item, index) => {
            return <option key={index} value={item}
            >{MonthName(item)}</option>
          })
        } */}
      </select>
      {props.month === null && 'Please select month'}
      {props.year === null && 'Please select Year'}
    </div>
  )
}

export default YearMonthDrops

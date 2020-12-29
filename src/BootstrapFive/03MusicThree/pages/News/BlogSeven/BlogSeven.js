import React, { useState, useEffect } from 'react'
import Blogs from './Blogs';
import axios from 'axios';
import { baseUrl } from '../../../Config/dataurl';
import { ToUniqueArray } from './ToUniqueArray';
import BlogFilterForm from './BlogFilterForm';



export const BlogSeven = () => {

  /** DATA FETCHING */
  const develUrl = `${baseUrl.URL}/devel-data?_format=json`
  /** SET DATA INTO state */
  const [d8devel, setD8Devel] = useState([]);
  const dataLength = d8devel.length;

  /** Available data for Year and month array 
   * FOR selected month data filter
   */
  const [dateMonths, setDateMonths] = useState([]);
  const [dateYear, setDateYear] = useState([]);
  const [month, setMonth] = useState([]);
  const [year, setYear] = useState([]);
  const [status, setStatus] = useState('');
  const [dtLength, setDtLength] = useState(0);

  useEffect(() => {
    axios({
      method: 'GET',
      url: develUrl,
      headers: {
        'Accept': 'application/vnd.api+json'
      }
    })
      .then(res => {
        console.log(res);
        setD8Devel(res.data);
        let months = [];
        let years = [];
        res.data.map(item => {
          let data = new Date(item.created[0].value);
          months.push(data.getMonth());
          years.push(data.getFullYear());
          return data;
        })
        setDateYear(years);
        setDateMonths(months);
        setStatus(res.status);
        setDtLength(res.data.length);

      })
      .catch(err => console.log(err))
    //setReadMore(false);
    console.log("useEffect 2");
  }, [develUrl])

  useEffect(() => {
    /** removes duplicate months from the array */
    setMonth(ToUniqueArray(dateMonths));
    setYear(ToUniqueArray(dateYear))
  }, [dateMonths, dateYear])

  console.log("BLog devel", d8devel);
  console.log("status", status);
  console.log("Data Length On load", dtLength);
  console.log("Data length from loaded data", dataLength);

  console.log("data months", dateMonths, "month", month, "year", year);

  return (
    <div className="container">
      <div className="row mb-4">
        <div className="col-lg-2 col-sm-12">
          <h1>News</h1>
        </div>
        <div className="col-lg-10 col-sm-12">
          <BlogFilterForm year={year} month={month} />
        </div>
      </div>
      <div className="row">
        <Blogs
          dataLength={dataLength}
          devel={d8devel}
          statu={status}
        />
      </div>
    </div>
  )
}
export default BlogSeven;
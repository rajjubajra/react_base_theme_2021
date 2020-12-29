import React, { useEffect, useState } from 'react'
import BoxArrowInLeft from '../../../components/Icon/BoxArrowInLeft';
import BoxArrowInRight from '../../../components/Icon/BoxArrowInRight';
import Blog from './Blog';
import { useSelector, useDispatch } from 'react-redux';
import { BlogSevenActionNextPage, BlogSevenActionPageReset, BlogSevenActionPages, BlogSevenActionPrevPage, BlogSevenBackToPages } from './redux/BlogSevenActionPages';
import { Month_Year } from './DateFormat'



function Blogs(props) {

  /** redux dispatch */
  const disptache = useDispatch();

  /** colour variant */
  const variant = useSelector(state => state.reducerSelectColourMode.variant);


  /** Pagination ******************/
  const pageGap = 5; /** number of page gap is number of article display in a page */
  const currentPage = useSelector(state => state.reducerBlogSevenPages.currentPage);
  const lastPage = useSelector(state => state.reducerBlogSevenPages.lastPage);
  const dataLength = props.dataLength;

  useEffect(() => {
    currentPage === 0
      /** Load fresh new page */
      ? disptache(BlogSevenActionPages(dataLength, pageGap))
      /** Load with current and last page while back from readmore page */
      : disptache(BlogSevenBackToPages(currentPage, lastPage, pageGap))
  }, [currentPage, dataLength, disptache, lastPage, pageGap])
  /** PAGINATION CLOSED *****************/


  /** SELECTED  month */
  const selectedMonth = useSelector(state => state.reducerBlogSevenSelectedDate.month);
  const selectedYear = useSelector(state => state.reducerBlogSevenSelectedDate.year);
  //console.log("SELECTED MONTH AND YEAR", selectedMonth, selectedYear);


  /** LOADs devel data filtered or without filtered */
  const [blogData, setBlogData] = useState([]);


  useEffect(() => {
    /** Selected Year and Month from FORM OPTION */
    const showMonth = `${selectedMonth}-${selectedYear}`;
    /** if YEAR and MONTH is selected FILTER DATA */
    const filtered = props.devel.length > 0 &&
      props.devel.filter(item =>
        Month_Year(item.created[0].value) === showMonth);
    /** LOAD data filtered or without filtered */
    selectedMonth === '' && selectedYear === ''
      ? setBlogData(props.devel)
      : setBlogData(filtered);
  }, [selectedYear, selectedMonth, props.devel])


  useEffect(() => {
    /** while selecting Month reset Pagination
     * First-page = 0
     * Last-Page = page Gap
     * Page Length = blogData length
     */
    disptache(BlogSevenActionPageReset(blogData.length, pageGap))
  }, [blogData.length, disptache, selectedYear, selectedMonth])


  // /* DATA LOADING MESSAGE */
  function LoadingStatusMessage(selectedMonth, selectedYear, status) {

    return selectedMonth === '' || selectedYear === ''
      ?
      <div className="d-flex justify-content-center mt-5 mb-5">
        <div className="card" style={{ width: "20rem" }}>
          <div class="card-header">Message</div>
          <div className="card-body">Please select month and year</div>
        </div>
      </div> :
      props.status === 200 ?
        <div className="d-flex justify-content-center mt-5 mb-5">
          <div className="card" style={{ width: "20rem" }}>
            <div class="card-header">Message</div>
            <div className="card-body">Loading....</div>
          </div>
        </div>
        :
        <div className="d-flex justify-content-center mt-5 mb-5">
          <div className="card" style={{ width: "20rem" }}>
            <div class="card-header">Message</div>
            <div className="card-body">Data not found</div>
          </div>
        </div>
  }


  //console.log("BLOG DATA", blogData);
  //console.log(currentPage, lastPage, blogData.length);

  return (
    <>

      {/** PAGE CONTENT */}
      <div className="container">
        {
          blogData.length > 0 ?
            blogData.slice(currentPage, lastPage).map(elm => {
              return <Blog
                key={elm.nid[0].value}
                id={elm.nid[0].value}
                nid={elm.nid[0].value}
                date={elm.created[0].value}
                title={elm.title[0].value}
                body={elm.body[0].processed}
              />
            })
            : LoadingStatusMessage(selectedMonth, selectedYear, props.status)
        }
      </div>


      {/**NEXT AND PREVIOUSE PAGE ARROWS */}

      <div className="container">
        <div style={{
          display: "flex",
          width: "100%",
          justifyContent: "center"
        }}>
          <i style={{
            cursor: "pointer",
            margin: "10px",
            display: currentPage === 0 ? "none" : "",
          }}
            onClick={() => disptache(BlogSevenActionPrevPage(currentPage, lastPage, pageGap, dataLength))}
          ><BoxArrowInLeft /></i>

          <span style={{
            fontSize: "0.7rem",
            fontWeight: "100",
            position: "relative",
            top: "15px",
            color: variant === 'dark' ? '#fff' : ''
          }}>
            Page
            </span>
          <i style={{
            cursor: "pointer",
            margin: "10px",
            display: lastPage >= blogData.length ? "none" : ''
          }}
            onClick={() => disptache(BlogSevenActionNextPage(currentPage, lastPage, pageGap, dataLength))}>
            <BoxArrowInRight /></i>
        </div>
      </div>


    </>
  )
}
export default Blogs
import React from 'react';
import { useSelector } from 'react-redux';
import PopularBlog from '../PopularBlog/PopularBlog';
import ViewBox from '../ViewBox';
import YearMonthDrops from './Form/YearMonthDrops';
import BoxArrowInLeft from '../../components/Icon/BoxArrowInLeft';
import BoxArrowInRight from '../../components/Icon/BoxArrowInRight';
import Taxonomy from '../Taxonomy/Taxonomy';



function BlogByTaxonomyDesktop(props) {


  /** BY YEAR AND MONTH TAXONOMY VIEW */
  /**
   * PASS Year and month [YYYYMM]
   * Drupal view Contexual filter sorts data by month
   */
  const month = useSelector(state => state.ReducerBlogSelectedDate.month);
  const year = useSelector(state => state.ReducerBlogSelectedDate.year);







  return (
    <>

      <div className="container">
        {/** LIST OF TAXONOMY TERMS WITH NAVIGATION */}
        <div className="row">
          <div className="col d-flex justify-content-center">
            <Taxonomy />
          </div>
        </div>

        {/** BLOG */}
        <div className="row  mt-5 mb-5">
          {/** POPULAR BLOG */}
          <div className="col-lg-3 bg-line-thick">
            <h1 style={{
              position: "relative",
              top: "50px"
            }}>Popular</h1>
            <PopularBlog />
          </div>

          <div className="col-lg-9">

            {/** COLUMN TITLE  AND YEAR MONTH SELECTION FORM */}
            <div className="row justify-content-center">
              <div className="col-lg-11 d-flex justify-content-between">
                <h1>{props.taxoName}</h1>
                <YearMonthDrops />
              </div>
            </div>

            {/** LIST OF SELECTED TAXONOMY BLOGS */}
            <div className="row">
              {
                props.fetched
                  ? props.slicedData.map(item => {
                    return <section
                      className="bg-line-narrow"
                      style={{ margin: "0px 50px 0px 60px" }}
                      key={item.nid}>
                      <ViewBox
                        nid={item.nid}
                        dateFormated={item.created}
                        taxoName={item.term_node_tid}
                        title={item.title}
                        body={item.body}
                        pager={props.pager}
                      />
                    </section>
                  })
                  : props.LoadingMessage(year, month)
              }
            </div>
          </div>
        </div>

        {/** PAGE NAVIGATIONS */}
        <div className="row justify-content-center mt-4 mb-5">
          {
            <span onClick={() => props.prevPage()}><BoxArrowInLeft /></span>
          }

          <p className="ml-5 mr-5">
            Page  -  {(props.pager + props.pageGap) / props.pageGap}
            <span className="small-font ml-2">[{props.dataLength} - {props.pager}]</span>
          </p>

          { /** Page gap defined in drupal view is 10 */
            <span onClick={() => props.nextPage()}><BoxArrowInRight /></span>
          }
        </div>

      </div>

    </>
  )
}
export default BlogByTaxonomyDesktop
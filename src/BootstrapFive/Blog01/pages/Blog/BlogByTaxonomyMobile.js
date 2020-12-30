import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import PopularBlog from '../PopularBlog/PopularBlog';
import ViewBoxMobile from '../ViewBoxMobile';
import YearMonthDrops from './Form/YearMonthDrops';
import BoxArrowInLeft from '../../components/Icon/BoxArrowInLeft';
import BoxArrowInRight from '../../components/Icon/BoxArrowInRight';
import Taxonomy from '../Taxonomy/Taxonomy';



function BlogByTaxonomyMobile(props) {


  /** BY YEAR AND MONTH TAXONOMY VIEW */
  /**
   * PASS Year and month [YYYYMM]
   * Drupal view Contexual filter sorts data by month
   */
  const month = useSelector(state => state.ReducerBlogSelectedDate.month);
  const year = useSelector(state => state.ReducerBlogSelectedDate.year);

  /** View code: RECENT = 1, POPULAT = 2, CATEGORY NAV = 3 */
  const [view, setView] = useState(1);



  return (
    <>

      <div className="container-fluid">

        {/** SUB NAVIGATION */}
        <div className="row">
          <div className="col">
            <span
              style={{ cursor: "pointer" }}
              onClick={() => setView(3)}>Category</span>
          </div>
          <div className="col">
            <span
              style={{ cursor: "pointer" }}
              className="text-uppercase"
              onClick={() => setView(1)}
            >Recent</span>
          </div>
          <div className="col">
            <span
              style={{ cursor: "pointer" }}
              className="text-uppercase"
              onClick={() => setView(2)}
            >Popular</span>
          </div>
        </div>


        {/** COLUMN TITLE  AND YEAR MONTH SELECTION FORM */}
        <div className="row justify-content-center mt-5">
          <h4 className="text-uppercase">{props.taxoName}</h4>
        </div>
        <div className="row justify-content-center">
          <YearMonthDrops />
        </div>


        {/** BLOG */}
        <div className="row mb-5">
          {/** LIST OF TAXONOMY TERMS WITH NAVIGATION */}
          <div className={`mt-5 ${view === 3 ? 'd-block' : 'd-none'}`}>
            <Taxonomy />
          </div>

          <div className="col">
            {/** LIST OF SELECTED TAXONOMY BLOGS */}
            <div className={`${view === 1 ? 'd-block' : 'd-none'}`}>
              {
                props.fetched
                  ? props.slicedData.map(item => {
                    return <section
                      style={{ margin: "10px 20px" }}
                      key={item.nid}>
                      <ViewBoxMobile
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

            {/** POPULAR BLOG */}
            <div className={`col ${view === 2 ? 'd-block' : 'd-none'}`}>
              <PopularBlog />
            </div>

          </div>
        </div>

        {/** PAGE NAVIGATIONS */}
        <div className="row">
          <div className="d-flex justify-content-center mt-4 mb-5">
            {
              <span onClick={() => props.prevPage()}><BoxArrowInLeft /></span>
            }

            <p className="ml-5 mr-5">
              Page  -  {(props.pager + props.pageGap) / props.pageGap}
              <div className="small-font ml-2">[{props.dataLength} - {props.pager}]</div>
            </p>

            { /** Page gap defined in drupal view is 10 */
              <span onClick={() => props.nextPage()}><BoxArrowInRight /></span>
            }
          </div>
        </div>

      </div>

    </>
  )
}
export default BlogByTaxonomyMobile
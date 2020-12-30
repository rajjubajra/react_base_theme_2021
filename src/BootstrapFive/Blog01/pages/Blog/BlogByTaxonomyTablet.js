import React from 'react';
import { useSelector } from 'react-redux';
//import PopularBlog from '../PopularBlog/PopularBlog';
import ViewBox from '../ViewBox';
import YearMonthDrops from './Form/YearMonthDrops';
import BoxArrowInLeft from '../../components/Icon/BoxArrowInLeft';
import BoxArrowInRight from '../../components/Icon/BoxArrowInRight';
import Taxonomy from '../Taxonomy/Taxonomy';



function BlogByTaxonomyTablet(props) {


  /** BY YEAR AND MONTH TAXONOMY VIEW */
  /**
   * PASS Year and month [YYYYMM]
   * Drupal view Contexual filter sorts data by month
   */
  const month = useSelector(state => state.ReducerBlogSelectedDate.month);
  const year = useSelector(state => state.ReducerBlogSelectedDate.year);







  return (
    <>

      <div className="container-fluid">

        {/** BLOG */}
        <div className="row mb-5">
          {/** LIST OF TAXONOMY TERMS WITH NAVIGATION */}
          <div className="col-md-4">
            <Taxonomy />
          </div>

          <div className="col-md-8">

            {/** COLUMN TITLE  AND YEAR MONTH SELECTION FORM */}
            <div className="row justify-content-center">
              <div className="col-md-10 d-flex justify-content-between">
                <h4 className="text-uppercase">{props.taxoName}</h4>
                <YearMonthDrops />
              </div>
            </div>

            {/** LIST OF SELECTED TAXONOMY BLOGS */}
            <div className="row">
              {
                props.fetched
                  ? props.slicedData.map(item => {
                    return <section
                      style={{ margin: "0px 10px 0px 10px" }}
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
export default BlogByTaxonomyTablet
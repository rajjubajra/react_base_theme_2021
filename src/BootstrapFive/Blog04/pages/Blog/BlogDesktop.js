import React from 'react';
import PopularBlog from '../PopularBlog/PopularBlog';
import Taxonomy from '../Taxonomy/Taxonomy';
import ViewBox from '../ViewBox';
import YearMonthDrops from './Form/YearMonthDrops';
import { useSelector } from 'react-redux';
import BoxArrowInLeft from '../../components/Icon/BoxArrowInLeft';
import BoxArrowInRight from '../../components/Icon/BoxArrowInRight';
import WideImage from './WideImage';




function BlogDesktop(props) {

  /** YEAR AND MONTH SELECTED FROM YearMonthDrops.js */
  const month = useSelector(state => state.ReducerBlogSelectedDate.month);
  const year = useSelector(state => state.ReducerBlogSelectedDate.year);


  const indexing = {
    position: "relative",
    zIndex: 3

  }
  return (
    <div className="blog-one">

      <div className={`container mb-5`}>

        {/** TAXONOMY TERMS */}
        <div className="row">
          <div className="col d-flex justify-content-center">
            <Taxonomy />
          </div>
        </div>


        <div className="row">

          {/** POPULAR BLOG */}
          <div className="col-lg-3 bg-line-thick">
            <PopularBlog />
          </div>


          {/** ALL BLOGS  LISTING */}
          <div className="col-lg-9">
            <div className="row">
              <div className="col d-flex justify-content-center">
                <WideImage />
              </div>
            </div>
            {/** Blog sub-title and Year Month drops */}
            <div style={indexing} className="row justify-content-center">
              <div className="col-lg-11 d-flex justify-content-between">
                <h2 className="text-uppercase">{props.title}</h2>
                <YearMonthDrops />
              </div>
            </div>

            {/** BLOG LISTING */}
            <div style={indexing} className="row">
              {
                props.fetched
                  ? props.slicedData.map(item => {
                    return <section
                      className="bg-line-narrow"
                      style={{ margin: "0px 50px 30px 60px" }}
                      key={item.nid}>
                      <ViewBox
                        nid={item.nid}
                        dateNonFormated={item.created}
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
          <div className="d-flex  justify-content-center mt-4 mb-5">
            {
              <span onClick={() => props.prevPage()}><BoxArrowInLeft /></span>
            }

            <div className="ml-5 mr-5">
              Page  -  {(props.pager + props.pageGap) / props.pageGap}
              <p className="small-font ml-2">
                [{props.dataLength} - {props.pager}]</p>
            </div>

            { /** Page gap defined in drupal view is 10 */
              <span onClick={() => props.nextPage()}><BoxArrowInRight /></span>
            }
          </div>
        </div>

      </div>
    </div>
  )
}
export default BlogDesktop
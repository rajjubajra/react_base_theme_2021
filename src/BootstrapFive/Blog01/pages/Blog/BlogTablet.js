import React, { useState } from 'react';
import PopularBlog from '../PopularBlog/PopularBlog';
import Taxonomy from '../Taxonomy/Taxonomy';
import ViewBox from '../ViewBox';
import YearMonthDrops from './Form/YearMonthDrops';
import { useSelector } from 'react-redux';
import BoxArrowInLeft from '../../components/Icon/BoxArrowInLeft';
import BoxArrowInRight from '../../components/Icon/BoxArrowInRight';





function BlogTablet(props) {

  /** YEAR AND MONTH SELECTED FROM YearMonthDrops.js */
  const month = useSelector(state => state.ReducerBlogSelectedDate.month);
  const year = useSelector(state => state.ReducerBlogSelectedDate.year);




  /** View Recent = 0, Popular = 1 */
  const [view, setView] = useState(0)



  return (
    <>

      <div className={`container-fluid mb-5`}>

        <div className="row">

          {/** Taxonomy Nav */}
          <div className="col-md-4">
            <Taxonomy />
          </div>


          {/** ALL BLOGS  LISTING */}
          <div className="col-md-8">

            {/** Blog sub-title and Year Month drops */}
            <div className="row justify-content-between">
              <div
                style={{
                  borderRight: view === 0 ? "1px solid #ccc" : "none",
                  borderRadius: "0px 15px 0px 0px",
                  borderBottom: view !== 0 ? "1px solid #ccc" : 'none',
                }}
                className="col-md-3">
                <h4
                  style={{ cursor: "pointer" }}
                  onClick={() => setView(0)}
                  className="text-uppercase">Recent</h4>
              </div>
              <div
                style={{
                  borderLeft: view === 1 ? "1px solid #ccc" : "none",
                  borderRadius: "15px 0px 0px 0px",
                  borderBottom: view !== 1 ? "1px solid #ccc" : 'none',
                }}
                className="col-md-3">
                <h4
                  style={{ cursor: "pointer" }}
                  onClick={() => setView(1)}
                  className="text-uppercase">Popular</h4>
              </div>

              {/** DROPDOWN YEAR AND MONTH SELECTION */}
              <div className="col-md-6 d-flex justify-content-end">
                <div className={`${view === 1 ? 'd-none' : 'd-block'}`}>
                  <YearMonthDrops />
                </div>

              </div>



            </div>




            {/** BLOG LISTING */}
            {/** RECENT BLOG */}
            <div className={`row ${view === 0 ? 'd-block' : 'd-none'}`}>
              <div className="col-md-11">
                {
                  props.fetched
                    ? props.slicedData.map(item => {
                      return <section key={item.nid}>
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

            {/** POPULAR BLOG */}
            <div className={`row ${view === 1 ? 'd-block' : 'd-none'}`}>
              <PopularBlog hideTitle={true} />
            </div>
          </div>
        </div>


        {/** PAGE NAVIGATIONS */}
        <div className={`${view === 0 ? 'd-flex' : 'd-none'} row`}>
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
export default BlogTablet
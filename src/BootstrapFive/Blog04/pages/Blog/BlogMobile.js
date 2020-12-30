import React, { useState } from 'react';
import PopularBlog from '../PopularBlog/PopularBlog';
import Taxonomy from '../Taxonomy/Taxonomy';
import ViewBoxMobile from '../ViewBoxMobile';
import YearMonthDrops from './Form/YearMonthDrops';
import { useSelector } from 'react-redux';
import BoxArrowInLeft from '../../components/Icon/BoxArrowInLeft';
import BoxArrowInRight from '../../components/Icon/BoxArrowInRight';



function BlogMobile(props) {

  /** YEAR AND MONTH SELECTED FROM YearMonthDrops.js */
  const month = useSelector(state => state.ReducerBlogSelectedDate.month);
  const year = useSelector(state => state.ReducerBlogSelectedDate.year);

  /** View code: RECENT = 0, POPULAT = 1, CATEGORY NAV = 2 */
  const [view, setView] = useState(0);
  const titleArr = ['Recent', 'Popular', 'Category'];



  return (
    <>

      <div className={`container-fluid mb-5`}>

        {/** SUB NAVIGATION */}
        <div className="row">
          <div className="col">
            <span
              style={{ cursor: "pointer" }}
              onClick={() => setView(2)}>Category</span>
          </div>
          <div className="col">
            <span
              style={{ cursor: "pointer" }}
              className="text-uppercase"
              onClick={() => setView(0)}
            >Recent</span>
          </div>
          <div className="col">
            <span
              style={{ cursor: "pointer" }}
              className="text-uppercase"
              onClick={() => setView(1)}
            >Popular</span>
          </div>
        </div>
        {/** SUB NAVIGATION  closed */}





        {/** Blog sub-title and Year Month drops */}
        <div className="row justify-content-center mt-5">
          <h2 className="text-uppercase">{titleArr[view]}</h2>
        </div>

        <div className="row justify-content-center">
          <div className={`${view === 0 ? 'd-block' : 'd-none'}`}>
            <YearMonthDrops />
          </div>
        </div>



        <div className={`row ${view === 2 ? 'd-flex' : 'd-none'}`}>
          <Taxonomy />
        </div>

        {/** ALL BLOGS  LISTING */}
        {/** BLOG LISTING */}
        <div className={`row ${view === 0 ? 'd-flex' : 'd-none'} justify-content-center`}>
          <div className="col-sm-10">
            {
              props.fetched
                ? props.slicedData.map(item => {
                  return <section
                    className="border-bottom"
                    key={item.nid}>
                    <ViewBoxMobile
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

        <div className={`row ${view === 1 ? 'd-flex' : 'd-none'} justify-content-center`}>
          <PopularBlog />
        </div>




        {/** PAGE NAVIGATIONS */}
        <div className={`${view === 0 ? 'flex' : 'd-none'} row`}>
          <div className="d-flex justify-content-center mt-4 mb-5">
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
        {/** PAGE NAVIGATIONS CLOSED */}

      </div>

    </>
  )
}
export default BlogMobile
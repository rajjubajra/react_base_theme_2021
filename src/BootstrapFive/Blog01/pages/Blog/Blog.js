import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ActionFetchBlog } from './Redux/ActionFetchBlog';
import NavigationOne from '../../components/header/NavigationOne/NavigationOne';
import ColourMode from '../../components/ColourMode/ColourMode';
import Title from '../../components/header/Titlte/Title';
import { useHistory, useLocation } from 'react-router-dom';
import BlogDesktop from './BlogDesktop';
import BlogTablet from './BlogTablet';
import BlogMobile from './BlogMobile';
import Footer from '../../components/footer/Footer';



function Blog() {

  /** dyanamic color */
  const className = useSelector(state => state.reducerSelectColourMode.colourMode);
  //const ColourVariant = useSelector(state => state.reducerSelectColourMode.variant);

  /** HOW DOES IT WORK */
  /**
   * If "Year & Month" is not selected 
   * All Data will be displayed with pagebreak
   * 
   * If "Year & Month" is selected 
   * ActionFetchBlog run with selected Year and Month
   * In Action 
   * if year, month is empty 
   * url will be : `${baseUrl.URL}/blog
   * if year and month is selected
   * url will be : `${baseUrl.URL}/blog/${year}${month}
   * - Drupal View Contexual Filter will sort data by YYYYMM
   * 
   * 
   * - DRUPAL 8 SITE
   *   - CREATE VIEW : BLOG  
   *   - SELECT ARTICLE
   *   - REST EXPORT PATH : "blog-year-month"
   *   - IN View Advance
   *      - Add Contexual Filter
   *      - Find and Select Year + Month 
   *   - IN View FORMAT
   *      - Format: Serializer | Settings: JSON
   *      - Show: entity
   *   - PAGER
   *      - Item to display: full | Paged, 0 items
   *   - SAVE VIEW : BLOG 
   */


  const dispatch = useDispatch();

  /** YEAR AND MONTH SELECTED FROM YearMonthDrops.js */
  const month = useSelector(state => state.ReducerBlogSelectedDate.month);
  const year = useSelector(state => state.ReducerBlogSelectedDate.year);

  /** ACTION FETCH BLOG DATA */
  useEffect(() => {
    dispatch(ActionFetchBlog(year, month))
  }, [dispatch, month, year])

  /**  FETCH DATA FROM REDUCER */
  const payload = useSelector(state => state.ReducerFetchBlog.payload);
  const fetched = useSelector(state => state.ReducerFetchBlog.fetched);

  /** PAGINATION *******************************************/
  const initial = 0;
  const pageGap = 8;
  const dataLength = fetched && payload.length;

  const [pager, setPager] = useState(initial);

  /**This useEffect will be 
   * implimented while back to the page 
   * from ReadMore page. In order to set the
   * existing page number
   */
  const pagerStored = useSelector(state => state.ReducerPager.pager);
  useEffect(() => {
    pagerStored > 0 && setPager(pagerStored);
  }, [pagerStored])

  const nextPage = () => {
    pager < (dataLength - pageGap) &&
      setPager(prevState => prevState + pageGap)
  }

  const prevPage = () => {
    pager >= pageGap &&
      setPager(prevState => prevState - pageGap)
  }

  const location = useLocation();
  const history = useHistory();
  console.log("location", location, "history", history);

  const slicedData = fetched && payload.slice(pager, pager + pageGap);
  /** PAGINATION closed ******************************/


  /** LOADING MESSAGE while selecting Month and Year */
  /** IF Year/Month both are not selected following message is displyed */
  const LoadingMessage = (year, month) => {
    if (year === '' || month === '') {
      return "Please select Year and Month";
    } else {
      return "Loading";
    }
  }


  const title = "Recent";


  return (
    <div className="blog-one">

      <div className={className}>
        <ColourMode />
        <NavigationOne />

        {/** MAIN NAVIGATION */}



        {/** TITLE */}
        <div className="container-fluid mt-5 mb-5 pb-5">

          <div className="row">
            <div className="col">
              <Title title="Blogs" />
            </div>
          </div>

          <div className="row d-none d-lg-block d-xl-block">
            <BlogDesktop
              title={title}
              nextPage={nextPage}
              prevPage={prevPage}
              fetched={fetched}
              slicedData={slicedData}
              LoadingMessage={LoadingMessage}
              pager={pager}
              pageGap={pageGap}
              dataLength={dataLength}
            />
          </div>

          <div className="row d-none d-md-block d-lg-none">
            <BlogTablet
              title={title}
              nextPage={nextPage}
              prevPage={prevPage}
              fetched={fetched}
              slicedData={slicedData}
              LoadingMessage={LoadingMessage}
              pager={pager}
              pageGap={pageGap}
              dataLength={dataLength}
            />
          </div>

          <div className="row d-block d-md-none d-lg-none d-xl-none">
            <BlogMobile
              nextPage={nextPage}
              prevPage={prevPage}
              fetched={fetched}
              slicedData={slicedData}
              LoadingMessage={LoadingMessage}
              pager={pager}
              pageGap={pageGap}
              dataLength={dataLength}
            />
          </div>

        </div>


        <div className="pb-5">
          <Footer />
        </div>

      </div>
    </div>
  )
}
export default Blog
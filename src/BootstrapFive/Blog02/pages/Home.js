import React, { useEffect, useState } from 'react';
import './Home/Home.scss';
import NavigationOne from '../components/header/NavigationOne/NavigationOne';
import { useSelector, useDispatch } from 'react-redux';
import ColourMode from '../components/ColourMode/ColourMode';
import { ActionFetchBlog } from './Redux/ActionFetchBlog';
import FirstBlock from './Home/FirstBlock';
import SecondBlock from './Home/SecondBlock';
import { useLocation, useHistory } from 'react-router-dom';
import BoxArrowInLeft from '../components/Icon/BoxArrowInLeft';
import BoxArrowInRight from '../components/Icon/BoxArrowInRight';
import Circle from './Home/Circle';
import Footer from '../components/footer/Footer';
import RepsNavIcon from './ResponsiveView/RepsNavIcon';




export default function Home() {

  const className = useSelector(state => state.reducerSelectColourMode.colourMode);
  //const ColourVariant = useSelector(state => state.reducerSelectColourMode.variant);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(ActionFetchBlog('', ''));
  }, [dispatch])


  const fetched = useSelector(state => state.ReducerFetchBlog.fetched);
  const payload = useSelector(state => state.ReducerFetchBlog.payload);

  const [latest, setLatest] = useState([]);

  useEffect(() => {
    fetched && setLatest(payload);
  }, [fetched, payload])



  /** PAGINATION *******************************************/
  const initial = 0;
  const pageGap = 5;
  const dataLength = fetched && latest.length;

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

  const slicedData = latest.length > 0 && latest.slice(pager, pager + pageGap);
  /** PAGINATION closed ******************************/


  return (
    <div className="blog-two min-vh-100">
      <div className={className}>
        <ColourMode />
        <RepsNavIcon />

        {/** NAVIGATION */}
        <NavigationOne />


        {/** MAIN CONTENT */}
        <div className="container">
          <div style={{ height: "40vh" }}></div>
          <FirstBlock data={latest} />
          {/** five more blogs */}
          <SecondBlock data={slicedData} pager={pager} />
        </div>
        {/** PAGE NAVIGATIONS */}

        <div
          style={{ position: "relative", zIndex: 10 }}
          className="row justify-content-center mt-4 mb-5">
          {
            <span onClick={() => prevPage()}><BoxArrowInLeft /></span>
          }

          <p className="ml-5 mr-5">
            Page  -  {(pager + pageGap) / pageGap}
            <span className="small-font ml-2">[{dataLength} - {pager}]</span>
          </p>

          { /** Page gap defined in drupal view is 10 */
            <span onClick={() => nextPage()}><BoxArrowInRight /></span>
          }
        </div>


        <Footer />

      </div>

      <Circle />
    </div>
  )
}

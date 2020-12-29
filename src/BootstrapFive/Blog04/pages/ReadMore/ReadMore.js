import React, { useEffect } from 'react';
import './ReadMore.scss';
import { useParams, useHistory, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ColourMode from '../../components/ColourMode/ColourMode';
import NavigationOne from '../../components/header/NavigationOne/NavigationOne';
import { ActionFetchReadMore } from './Redux/ActionFetchReadMore';
import DangerouslySetInnerHtml from '../../components/DangerouslySetInnterHtml';
import IconClose from '../../components/Icon/IconClose';
import { ActionPager } from '../../redux/actions/ActionPager';




function ReadMore(props) {


  /** daynamic colour */
  const className = useSelector(state => state.reducerSelectColourMode.colourMode);
  //const ColourVariant = useSelector(state => state.reducerSelectColourMode.variant);

  const dispatch = useDispatch();

  const { nid } = useParams();

  useEffect(() => {
    dispatch(ActionFetchReadMore(nid));
  }, [dispatch, nid])


  const data = useSelector(state => state.ReducerFetchReadMore.data);
  const fetched = useSelector(state => state.ReducerFetchReadMore.fetched);


  // const imgStyle = {
  //   width: "100%",
  //   height: "300px",
  //   objectFit: "cover",
  //   filter: "grayscale(100%)",
  //   margin: "20px 0px",
  // }


  /** GO BACK NAV */
  //const location = useLocation();
  const history = useHistory();
  const location = useLocation();
  useEffect(() => {
    dispatch(ActionPager(location.state.pager))
  }, [dispatch, location])



  return (
    <div className="blog-four">
      <div className={`${className} min-vh-100 pb-5`}>
        <ColourMode />
        {/** NAVIGATION */}
        <NavigationOne />



        {
          fetched ?
            <div className="container mt-5 pb-5">

              {/**  close icon */}
              <div className="row">
                <div className="col d-flex justify-content-end mr-3">
                  <span onClick={() => history.goBack()}> <IconClose /></span>
                </div>
              </div>

              {/** TITLE */}
              <div className="row mb-5">
                <div className="col">
                  <h2>{data[0].title}</h2>
                </div>
              </div>


              {/** TEXT BODY */}
              <div className="row">
                <div className="col-lg-9">
                  <div className="pr-5">
                    <DangerouslySetInnerHtml text={data[0].body} substr={0} />
                  </div>
                </div>
                <div className="col-lg-3">
                  {/** Image / Taxonomy and Date on side */}
                  <div>
                    <img
                      style={{ width: "100%", height: "auto" }}
                      src="https://yellow-website.com/d8-react-base-theme-backend/sites/default/files/photo_placeholder/water-1912606_640.jpg"
                      alt="blog" />
                  </div>
                  <div style={{
                    margin: "20px",
                    paddingLeft: "20px",
                    minHeight: "150px",
                    borderLeft: "5px solid #ccc",
                    display: "flex",
                    alignItems: "center",
                  }}>
                    <div className="col">
                      {/** created date */}
                      <div className="date">
                        {data[0].created}
                      </div>
                      {/**Taxonomy */}
                      <div className="taxonomy">
                        <DangerouslySetInnerHtml text={data[0].term_node_tid} substr={0} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            : <div><h1>Loading...</h1></div>
        }
      </div>
    </div>
  )
}
export default ReadMore
import React, { useEffect } from 'react';
import { useParams, useHistory, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ColourMode from '../../components/ColourMode/ColourMode';
import NavigationOne from '../../components/header/NavigationOne/NavigationOne';
import { ActionFetchReadMore } from './Redux/ActionFetchReadMore';
import DangerouslySetInnerHtml from '../Utilities/DangerouslySetInnterHtml';
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


  const imgStyle = {
    width: "100%",
    height: "300px",
    objectFit: "cover",
    filter: "grayscale(100%)",
    margin: "20px 0px",
  }


  /** GO BACK NAV */
  const history = useHistory();
  const location = useLocation();
  useEffect(() => {
    dispatch(ActionPager(location.state.pager))
  }, [dispatch, location])

  console.log("LOCATION?????", location);



  return (
    <div className="blog-one">
      <div className={`${className} mb-5`}>
        <ColourMode />

        <div className="container mt-5">
          <NavigationOne />

          {
            fetched ?
              <>
                {/** created date */}
                <div className="row mt-5">
                  <div className="col mt-5">
                    {data[0].created}
                  </div>
                </div>
                {/** taxonomy name & close icon */}
                <div className="row">
                  <div className="col">
                    <DangerouslySetInnerHtml text={data[0].term_node_tid} substr={0} />
                  </div>
                  <div className="col">
                    <span onClick={() => history.goBack()}> <IconClose /></span>
                  </div>
                </div>

                {/** TITLE */}
                <div className="row">
                  <div className="col">
                    <h2>{data[0].title}</h2>
                  </div>
                </div>

                {/** Image */}
                <div className="row">
                  <div className="col">
                    <img style={imgStyle}
                      src={data[0].field_image}
                      alt={data[0].title} />
                  </div>
                </div>

                {/** TEXT BODY */}
                <div className="row">
                  <div className="col">
                    <DangerouslySetInnerHtml text={data[0].body} substr={0} />
                  </div>
                </div>
              </>
              : <div><h1>Loading...</h1></div>
          }
        </div>
      </div>
    </div >
  )
}
export default ReadMore
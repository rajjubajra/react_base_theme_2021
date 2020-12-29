import React, { useState, useEffect } from 'react';
import './Tour.scss';
import NavigationOne from '../../components/header/NavigationOne/NavigationOne';
import ColourMode from '../../components/ColourMode/ColourMode';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { actionFetchTourDetails } from './Redux/ActionFetchTourDetails';
import IconClose from '../../components/Icon/IconClose';
import { Link } from 'react-router-dom';
import { pagelink } from '../../PageLink';
import SocialMediaSticky from '../../components/socalMedia/SocialMediaSticky';
import CopyToClipBoard from '../../components/CopyToClipBoard';




function TourDetails() {

  /** DYNAMIC THEME COLOUR */
  const [className, setClassName] = useState('light');


  const colorMode = useSelector(state => state.reducerSelectColourMode.colourMode);
  const variant = useSelector(state => state.reducerSelectColourMode.variant);
  console.log(colorMode);

  useEffect(() => {
    setClassName(colorMode);

  }, [colorMode, variant])
  /** DYNAMIC THEME COLOUR CLOSED */



  /** TOUR DETAILS DATA FECHING */
  const dispatch = useDispatch();
  const { nid } = useParams();

  useEffect(() => {
    dispatch(actionFetchTourDetails(nid));
  }, [dispatch, nid])

  const data = useSelector(state => state.reducerFetchTourDetails.data);
  const fetched = useSelector(state => state.reducerFetchTourDetails.fetched);
  console.log(fetched && data.title[0].value);

  function createMarkup(txt) {
    return {
      __html: txt
    };
  };



  return (
    <div className="music-one">

      <div className={`${className} container-fulid min-vh-100`}>
        <ColourMode />
        <NavigationOne />
        <SocialMediaSticky />
        <div className="container mt-5 mb-5 tour-details">
          <div className="row">
            <div className="col">
              <div className="d-flex justify-content-end">
                <CopyToClipBoard />
                <Link
                  to={`/${pagelink.tour}`}
                  className="d-flex justify-content-end">
                  <IconClose /></Link>
              </div>
            </div>
          </div>
          {/** TITLE */}
          <div className="row">
            <div className="col">
              <h1>{fetched && data.title[0].value}</h1>
            </div>
          </div>
          {/** EVENT DATE */}
          <div className="row justify-content-center mt-3">
            <div className="col-lg-6 col-sm-12">
              <h3>Event Date:
              {fetched && data.field_event_date.length > 0
                  && data.field_event_date[0].value}</h3>
            </div>
            <div className="col-lg-6 col-sm-12 d-flex justify-content-end">
              <button>{fetched && data.field_buy_ticket[0].title}</button>
            </div>
          </div>
          {/** LOCATION */}
          <div className="row mt-5">
            <div className="col">
              <div className="location">
                <h4>Location:</h4>
                <p>{fetched && data.field_address_line_1[0].value}</p>
                <p>{fetched && data.field_address_line_2[0].value}</p>
                <p>{fetched && data.field_event_location[0].value}</p>
              </div>
            </div>
          </div>
          {/** TOUR DETAILS */}
          <div className="row mt-5">
            <div className="col">
              <div dangerouslySetInnerHTML={createMarkup(fetched && data.field_details[0].processed)} />
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default TourDetails

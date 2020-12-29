import React, { useEffect } from 'react';
import './Tour.scss';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CopyToClipBoard from '../../components/CopyToClipBoard';
import { monthName } from './MonthName';
import { DateDay } from '../../components/DateDay';
import { DateYear } from '../../components/DateYear';
import DangerouslySetInnerHtml from '../../components/DangerouslySetInnterHtml';


function TourDetails() {

  const title = useSelector(state => state.reducerFetchTourDetails.title);
  const eventDate = useSelector(state => state.reducerFetchTourDetails.eventDate);
  const location = useSelector(state => state.reducerFetchTourDetails.location);
  const addressOne = useSelector(state => state.reducerFetchTourDetails.addressLineOne);
  const addressTwo = useSelector(state => state.reducerFetchTourDetails.addressLineTwo);
  //const nid = useSelector(state => state.reducerFetchTourDetails.nid);
  const details = useSelector(state => state.reducerFetchTourDetails.details);
  const ticketTitle = useSelector(state => state.reducerFetchTourDetails.ticket);
  const buyTicketUri = useSelector(state => state.reducerFetchTourDetails.buyTicketUri);
  //console.log("DETAILS ", fetched && data);

  const ticketStyle = {
    width: "100%",
    height: "200px",
    display: "flex",
    border: "1px solid #ccc",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
  }

  const eventDateStyle = {
    width: "100%",
    height: "200px",
    display: "flex",
    flexDirection: "column",
    border: "1px solid #ccc",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    marginBottom: "20px"
  }


  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);




  return (

    <div>
      <div className="container-fluid music-three tour-details">
        {/** TITLE */}
        <div className="row">
          <div className="col-md-10">
            <h1>{title}</h1>
          </div>
          <div className="col-md-2">
            <CopyToClipBoard />
          </div>
        </div>

        {/** EVENT DATE , TICKET BOOKING box */}
        <div className="row justify-content-center">
          <div className="col-lg-6 col-sm-12">
            <section style={eventDateStyle}>
              <h3>Date:</h3>
              <h4>{DateDay(eventDate)} {monthName(eventDate)}, {DateYear(eventDate)}</h4>
            </section>

          </div>
          <div className="col-lg-6 col-sm-12 d-flex justify-content-end">
            <Link
              style={ticketStyle}
              to={{ pathname: buyTicketUri }}>
              <h1>{ticketTitle}</h1>
            </Link>
          </div>
        </div>


        {/** LOCATION */}
        <div className="row mt-5">
          <div className="col">
            <div className="location">
              <h4>Location:</h4>
              <p>{addressOne}, {addressTwo}, {location}</p>
            </div>
          </div>
        </div>
        {/** TOUR DETAILS */}
        <div className="row mt-3">
          <div className="col-11">
            <DangerouslySetInnerHtml text={details} />
          </div>
        </div>
      </div>

    </div >
  )
}
export default TourDetails
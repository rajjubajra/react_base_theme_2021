import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actionFetchTour } from './Redux/ActionFetchTour';
import { actionFetchTourDetails } from './Redux/ActionFetchTourDetails';
import { actionHideTour } from './Redux/ActionHideTour';
import { Link } from 'react-router-dom';
import { monthName } from './MonthName';
import { DateDay } from '../../components/DateDay';
import { DateYear } from '../../components/DateYear';

function TourPlan() {

  /** colour variant */
  const variant = useSelector(state => state.reducerSelectColourMode.variant);

  const dispatch = useDispatch();
  const tour = useSelector(state => state.reducerFetchTour.payload);
  const dataLength = useSelector(state => state.reducerFetchTour.dataLength);

  console.log("TOUR", dataLength > 0 && tour[0].nid);

  useEffect(() => {
    dispatch(actionFetchTour());
  }, [dispatch])

  useEffect(() => {
    dataLength > 0 &&
      dispatch(actionFetchTourDetails(tour[0].nid))
  }, [dataLength, dispatch, tour])



  const rowStyle = {
    border: variant === 'dark' ? "1px solid #eeeeee54" : "1px solid #9999999e",
    padding: "15px 0px"
  }






  return (
    <div className="tour-plan">
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <h1>Tour</h1>
          </div>
        </div>
        {
          dataLength > 0 ?
            tour.map(item => {
              const { nid, date, title, addressLineOne, buyTicketTitle, buyTicketUri } = item;
              return <div key={nid} style={rowStyle} className="row mt-4">
                {/** DATE */}
                <div className="col-lg-3 col-md-3 col-4">
                  <h5>{DateYear(date)}</h5>
                  <div className="d-flex">
                    <p className="mr-2">{DateDay(date)}</p> <p>{monthName(date)}</p>
                  </div>
                </div>
                {/** VANUE */}
                <div className="col-lg-5 col-md-5 col-8">
                  <h5>{title}</h5>
                  <p>{addressLineOne}</p>
                </div>
                {/** DETAILS LINK */}
                <div className="col-lg-2 col-md-2  col-6">
                  <span
                    style={{
                      color: variant === 'dark' ? '#999' : '',
                      cursor: "pointer"
                    }}
                    onClick={() => {
                      dispatch(actionFetchTourDetails(nid));
                      dispatch(actionHideTour(true))
                    }}
                  >Details</span>
                </div>
                {/** buy ticket */}
                <div className="col-lg-2 col-md-2  col-6">
                  <Link to={{ pathname: buyTicketUri }}>{buyTicketTitle}</Link>
                </div>
              </div>
            })
            : 'Loading,...'
        }
      </div>

    </div >

  )
}

export default TourPlan

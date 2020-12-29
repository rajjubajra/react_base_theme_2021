import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actionFetchTour } from '../Tour/Redux/ActionFetchTour';
import { Link } from 'react-router-dom';
import { pagelink } from '../../PageLink';

function TourPlan() {

  const dispatch = useDispatch();
  const tour = useSelector(state => state.reducerFetchTour.data);
  const dataLength = useSelector(state => state.reducerFetchTour.dataLength);

  console.log("TOUR", tour);


  const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  useEffect(() => {
    dispatch(actionFetchTour());
  }, [dispatch])




  return (
    <div className="tour-plan">
      { dataLength > 0
        ? tour.map((item, index) => {
          const { title, field_event_date, field_address_line_1, field_address_line_2, field_buy_ticket, field_event_location, field_location_icon, nid } = item;

          /** show date format */
          const dt = new Date(field_event_date.length > 0 && field_event_date[0].value);

          console.log("DATE", field_event_date[0]);
          return <ul key={index} className="list-group list-group-horizontal-md mb-3">

            <li className="list-group-item">
              {field_event_date.length > 0
                && `${dt.getDate()},
                    ${month[dt.getMonth()]},
                    ${dt.getFullYear()}`
              }
            </li>
            <li className="list-group-item">

              <h5>
                <i><img style={{ width: "30px", margin: "3px 6px 3px 0px" }} src={field_location_icon.length > 0 && field_location_icon[0].value} alt="location" /></i> {title.length > 0 && title[0].value}</h5>
              <p>{field_address_line_1.length > 0
                && field_address_line_1[0].value}
                - [{field_event_location.length > 0
                  && field_event_location[0].value}]
              </p>
              <p>{field_address_line_2.length > 0
                && field_address_line_2[0].value}</p>
            </li>
            <li className="list-group-item">
              {
                nid.length > 0
                && <Link
                  to={`${pagelink.tourDetails}/${nid[0].value}`}>
                  Details +
                </Link>
              }
            </li>
            <li className="list-group-item">
              {
                field_buy_ticket.length > 0 &&
                <Link to={{ pathname: field_buy_ticket[0].uri }}>
                  {field_buy_ticket[0].title}</Link>
              }
            </li>
          </ul>
        })
        : 'Loading....'
      }



      {/* <ul className="list-group list-group-horizontal-md mb-3">
        <li className="list-group-item">02 Feb, 2021</li>
        <li className="list-group-item">Dapibus ac facilisis in</li>
        <li className="list-group-item detail" style={{ cursor: "pointer" }}>Detail +</li>
        <li className="list-group-item ticket" style={{ cursor: "pointer" }}>Ticket</li>
      </ul>

      <ul className="list-group list-group-horizontal-md mb-3">
        <li className="list-group-item">20 Feb, 2021</li>
        <li className="list-group-item">Oibus ac facilisis in Thankds</li>
        <li className="list-group-item detail" style={{ cursor: "pointer" }}>Detail +</li>
        <li className="list-group-item ticket" style={{ cursor: "pointer" }}>Ticket</li>
      </ul>

      <ul className="list-group list-group-horizontal-md mb-3">
        <li className="list-group-item">03 Mar, 2021</li>
        <li className="list-group-item" >Facilisis in Oibus ac </li>
        <li className="list-group-item detail" style={{ cursor: "pointer" }}>Detail +</li>
        <li className="list-group-item ticket" style={{ cursor: "pointer" }}>Ticket</li>
      </ul>

      <ul className="list-group list-group-horizontal-md mb-3">
        <li className="list-group-item">13 Apr, 2021</li>
        <li className="list-group-item">Facilisis in Oibus ac </li>
        <li className="list-group-item detail" style={{ cursor: "pointer" }}>Detail +</li>
        <li className="list-group-item ticket" style={{ cursor: "pointer" }}>Ticket</li>
      </ul> */}
    </div>

  )
}

export default TourPlan

import React from 'react';
import { Link } from 'react-router-dom';
import './GroupItems.scss';


function GroupItem(props) {

  return (
    <div className="col-lg-4">
      <Link to="#" className={props.inView ? "start-fade" : props.itemGroup} style={{ animationDelay: `${props.delay * 0.2}s` }}>
        <div className="card">
          <img className="card-img-top" variant="top" src={props.itemImg} alt="cards" />
          <div className="card-body">
            <div className="card-title">{props.delay}{props.itemTitle}</div>
            <div className="card-text">{props.itemBrief}</div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default GroupItem



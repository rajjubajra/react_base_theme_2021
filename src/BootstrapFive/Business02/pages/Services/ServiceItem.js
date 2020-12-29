import React from 'react'

function ServiceItem(props) {
  return (
    <div
      className={`{
        props.cssclass} card mt-5`}
      style={{ animationDelay: `${props.delay * 0.5}s`, height: "550px", minWidth: "300px" }}>

      <img
        className="card-img-top"
        variant="top"
        style={{ padding: "20px", height: "250px", objectFit: "cover" }}
        src={props.img}
        alt="cards"
      />

      <div className="card-body">
        <div className="card-title">{props.title}{props.delay}</div>
        <div className="card-text">
          {props.text}
        </div>
      </div>
      <div className="card-footer">
        <small className="text-muted">Last updated 3 mins ago</small>
      </div>

    </div>
  )
}

export default ServiceItem

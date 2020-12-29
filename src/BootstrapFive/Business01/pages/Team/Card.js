import React from 'react';
import { useSelector } from 'react-redux';





function Card(props) {

  const variant = useSelector(state => state.reducerSelectColourMode.variant);


  const cardStyle = {
    background: variant === 'dark' ? "#333" : "#fafafa",
    width: "100%",
    margin: "20px 5px",
    border: "1px solid #ccc"
  }


  return (
    <div className="card" style={cardStyle}>
      <img
        src="https://yellow-website.com/d8-react-base-theme-backend/sites/default/files/photo_placeholder/portait.png"
        className="card-img-top"
        alt="..." />
      <div className="card-body">
        <h5 className="card-title">Member's Name</h5>
        <p className="card-text">Position</p>
      </div>
    </div>
  )
}

export default Card

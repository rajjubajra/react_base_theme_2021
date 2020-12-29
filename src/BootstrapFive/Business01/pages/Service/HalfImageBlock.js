import React from 'react';
import { useSelector } from 'react-redux';


function HalfImageBlock(props) {

  const variant = useSelector(state => state.reducerSelectColourMode.variant);


  const firstHalfStyle = {
    width: "100%",
    minHeight: "50vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    background: variant === 'dark' ? "#000" : "rgb(185 185 185)",
    padding: "0px 100px"
  }


  return (
    <div className="w-100">
      <div style={firstHalfStyle}>
        <h1 className="display-1">Services</h1>
      </div>
    </div>
  )
}

export default HalfImageBlock

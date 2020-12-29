import React, { useState } from 'react';
import { useSelector } from 'react-redux';




function IconClose() {

  /** colour variant */
  const variant = useSelector(state => state.reducerSelectColourMode.variant);
  const bgColour = variant === 'dark' ? "#ffffff" : "#333333";


  const [arrow, setArrow] = useState(false);




  const IconCloseStyle = {
    padding: "20px",
    margin: "0px",
    width: "30px",
    height: "30px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
  }

  const crossleft = {
    width: arrow ? "10px" : "20px",
    height: "3px",
    backgroundColor: bgColour,
    transform: arrow
      ? "skew(-10deg, -30deg) translate(0px, -2px)"
      : "skew(-10deg, -45deg) translate(0px, 2px)",
    transition: "transform 1s"
  }

  const crossRight = {
    width: arrow ? "10px" : "20px",
    height: "3px",
    backgroundColor: bgColour,
    transform: arrow
      ? "skew(0deg, 30deg) translate(1px, 2px)"
      : "skew(0deg, 45deg) translate(0px, -1px)",
    transition: "transform 1s"
  }

  const arrowLine = {
    display: arrow ? "block" : "none",
    width: "20px",
    height: "3px",
    backgroundColor: bgColour,
    position: "relative",
    top: "-0.25rem",
    transition: "display 1s"
  }


  return (
    <div

      onMouseEnter={() => setArrow(true)}
      onMouseLeave={() => setArrow(false)}
      style={IconCloseStyle}>

      <div>
        <div style={crossleft}></div>
        <div style={crossRight}></div>
        <div style={arrowLine}></div>
      </div>

    </div>
  )
}

export default IconClose

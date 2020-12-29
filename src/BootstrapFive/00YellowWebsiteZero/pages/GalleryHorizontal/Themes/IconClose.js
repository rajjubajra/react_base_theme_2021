import React, { useState } from 'react';
import styled from 'styled-components';




function IconClose() {

  const [arrow, setArrow] = useState(false);


  const IconClose = styled.div`
    padding: 20px;
    margin: 0px;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    position: fixed;
    z-index: 50;
    right: 20px;
    top: 20px;
  `;


  const crossleft = {
    width: arrow ? "10px" : "20px",
    height: "3px",
    backgroundColor: "#000",
    transform: arrow
      ? "skew(-10deg, -30deg) translate(0px, -2px)"
      : "skew(-10deg, -45deg) translate(0px, 2px)",
    transition: "transform 1s"
  }

  const crossRight = {
    width: arrow ? "10px" : "20px",
    height: "3px",
    backgroundColor: "#000",
    transform: arrow
      ? "skew(0deg, 30deg) translate(1px, 2px)"
      : "skew(0deg, 45deg) translate(0px, -1px)",
    transition: "transform 1s"
  }

  const arrowLine = {
    display: arrow ? "block" : "none",
    width: "20px",
    height: "3px",
    backgroundColor: "#000",
    position: "relative",
    top: "-0.25rem",
    transition: "display 1s"
  }


  return (
    <IconClose
      onMouseEnter={() => setArrow(true)}
      onMouseLeave={() => setArrow(false)}>

      <div>
        <div style={crossleft}></div>
        <div style={crossRight}></div>
        <div style={arrowLine}></div>
      </div>

    </IconClose>
  )
}

export default IconClose

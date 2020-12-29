import React from 'react';
import { useSelector } from 'react-redux';

function AboutBg() {


  const variant = useSelector(state => state.reducerSelectColourMode.variant);



  const wrapping = {
    position: "fixed",
    top: "320px",
    right: "53%",
    zIndex: "0"
  }

  const line = {
    width: "500px",
    height: "1px",
    background: variant === 'dark' ? " " : "#e9ecefcf",
    display: "block",
    position: "absolute",
    transform: "rotate(90deg) translateY(100px) translateX(150px)"
  }

  const bg = {
    position: "absolute",
    width: "300px",
    height: "300px",
    background: variant === 'dark' ? " " : "rgba(204,204,204,0.34)",
    borderRadius: "55%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }


  const hStyle = {
    fontSize: "5rem",
    fontWeight: "800",
    color: variant === 'dark' ? "#afafaf1c" : "rgba(175,175,175,0.35)",
    fontFamily: "'Allura', cursive",
    letterSpacing: "0.7rem"
  }

  return (
    <div className="container">
      <div className="row">
        <div style={wrapping}>
          <div style={bg}>
            <span style={hStyle}>About</span>
          </div>
          <span style={line}></span>
        </div>
      </div>
    </div>
  )
}

export default AboutBg

import React from 'react'

function AboutBg() {

  const wrapping = {
    position: "absolute",
    top: "390px",
    left: "20%",
    zIndex: "0"
  }

  const line = {
    width: "500px",
    height: "1px",
    background: "rgba(245,241,241,0.3)",
    display: "block",
    position: "absolute",
    transform: "rotate(90deg) translateY(90px) translateX(150px)"
  }

  const bg = {
    position: "absolute",
    width: "300px",
    height: "300px",
    background: "rgba(204,204,204,0.34)",
    borderRadius: "55%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transform: "rotate(-90deg)"
  }


  const hStyle = {
    fontSize: "5rem",
    fontWeight: "800",
    color: "rgba(175,175,175,0.35)"
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

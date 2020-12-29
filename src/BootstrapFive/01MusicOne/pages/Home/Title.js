import React from 'react';

const titleStyle = {
  transform: "rotate(90deg)",
  position: "relative",
  top: "20%",
  letterSpacing: "2rem",
  borderRight: "1px solid #ccc",
  padding: "40px 0px"
}
const titleStyleSM = {
  textAlign: "right",
  letterSpacing: "1rem"
}
const titleStyleXS = {
  textAlign: "right",
  letterSpacing: "1rem"
}

function Title() {
  return (
    <>
      <div className="col-lg-4 col-md-6  d-none d-sm-none d-md-block">
        <h1 style={titleStyle}>YW4 MUSIC ONE</h1>
      </div>
      <div className="col-lg-4 col-md-6 d-none d-sm-block d-md-none">
        <h1 style={titleStyleSM}>YW4 MUSIC ONE</h1>
      </div>
      <div className="col-lg-4 col-md-6 d-block d-sm-none">
        <h1 style={titleStyleXS}>YW4 MUSIC ONE</h1>
      </div>
    </>
  )
}

export default Title

import React from 'react'


const bgPosition = {
  position: "fixed",
  width: "100%",
}



function BackgroundText(props) {
  return (
    <div style={bgPosition}>
      <div className="d-none d-md-block"
        style={{
          width: "100%",
          height: "80vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "20rem",
          color: "rgba(204,204,204,0.36)"
        }}>
        {props.text}
      </div>
      <div className="d-sm-block d-md-none  d-lg-none d-xl-none"
        style={{
          width: "100%",
          height: "80vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "20rem",
          color: "rgba(204,204,204,0.36)",
          transform: "skew(10deg, 10deg) rotate(100deg)"
        }}>
        {props.text}
      </div>
    </div>
  )
}

export default BackgroundText

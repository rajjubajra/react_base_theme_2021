import React from 'react'


function CustomPlaceholder(props) {
  const divStyle = {
    display: "flex",
    flexDirection: "column",
    width: props.width,
    height: props.height,
    justifyContent: "center",
    alignItems: "center",
    background: "#ddd",
    border: "1px solid #fff",
    margin: "20px 0px"
  }
  const pStyle = {
    fontSize: "0.6rem",
    fontWeight: "200",
    color: "#333"
  }

  return (
    <div style={divStyle}>
      <p> {props.width} x {props.height}</p>
      <p style={pStyle}>Yellow-website Image Placeholder</p>
    </div>
  )
}

export default CustomPlaceholder

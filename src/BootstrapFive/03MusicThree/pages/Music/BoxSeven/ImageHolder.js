import React from 'react';




function PhotoMusic(props) {


  const imgStyle = {
    width: props.width,
    height: props.height,
    margin: "5px",
    objectFit: "cover",
    border: "1px solid #000",
    outlineOffset: "-10px",
    outline: "1px solid rgba(255,255,255,0.25)",
    filter: "grayscale(1)",
  }


  return (
    <div className="d-flex flex-column">
      <img style={imgStyle} src={props.img} alt={props.alt} />
      <span style={{ position: "relative", left: "5px" }}><p>{props.alt}</p></span>
    </div>
  )

}
export default PhotoMusic
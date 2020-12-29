import React from 'react'
import PhotoMusic from '../../../components/PhotoPlaceholder/PhotoMusic';


const boxTwo = {
  display: "flex",
  justifyContent: "center",
  margin: "5px",
  position: "relative",
}
const caption = {
  position: "absolute",
  top: "55%",
  color: "#fff",
  background: "rgb(248, 249, 250, 0.21)",
  width: "100%",
  textAlign: "center",
  fontWeight: "800"
}

function PhotoBox(props) {
  return (
    <div style={boxTwo}>
      <PhotoMusic
        className="d-block w-100"
        width={props.width}
        height={props.height}
      />
      <h2 style={caption}>Text Image</h2>
    </div>
  )
}

export default PhotoBox

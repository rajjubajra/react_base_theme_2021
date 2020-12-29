import React from 'react'
import Image from '../../../components/Image';


const boxOne = {
  display: "block",
  maxWidth: "500px",
  height: "auto",
  margin: "27px",
  border: "0px solid #eee",
  position: "relative",
}
const caption = {
  color: "#000",
  width: "100%",
  fontWeight: "100",
  letterSpacing: "0.1rem",
  marginTop: "5px",
}

function PhotoBox(props) {
  return (

    <div style={boxOne}>
      <Image
        width={props.width}
        height={props.height}
        img={props.img}
      />
      <p style={caption}>Text Image</p>
    </div>
  )
}

export default PhotoBox

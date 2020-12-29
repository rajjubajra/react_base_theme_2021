import React, { useEffect, useState } from 'react'

function Image(props) {


  const [isImage, setIsImage] = useState();


  useEffect(() => {
    typeof (props.img) === 'undefined' ? setIsImage(false) : setIsImage(true);
  }, [props.img])

  console.log(isImage);


  return (
    <>
      {
        isImage
          ? <img
            style={{
              objectFit: "cover",
              width: props.width && props.width,
              height: props.height && props.height
            }}
            src={props.img}
            alt="music"
          />
          : <div style={{
            width: props.width,
            height: props.height === "auto" ? '200px' : props.height,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "#eee",
            border: "1px solid #ccc"
          }} >IMAGE</div>
      }
    </>
  )
}

export default Image

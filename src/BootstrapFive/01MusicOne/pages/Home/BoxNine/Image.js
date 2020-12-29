import React from 'react'

function Image(props) {
  return (
    <img
      style={{
        objectFit: "cover",
        width: props.width && props.width,
        height: props.height && props.height
      }}
      src="http://yellow-website.com/d8-react-base-theme-backend/sites/default/files/photo_placeholder/Music2011_8.JPG"
      alt="music"
    />
  )
}

export default Image

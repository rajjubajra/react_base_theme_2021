import React from 'react';


function Image() {

  const imgStyle = {
    width: "100%",
    height: "500px",
    objectFit: "cover"
  }

  return (
    <div className="w-100">
      <img
        style={imgStyle}
        src="https://yellow-website.com/d8-react-base-theme-backend/sites/default/files/photo_placeholder/computer-4484282_1280.jpg"
        alt="main-page" />
    </div>
  )
}

export default Image

import React from 'react';
import "./WideImage.scss";
import { useSelector } from 'react-redux';



function WideImage() {

  const variant = useSelector(state => state.reducerSelectColourMode.variant);



  const image = 'https://yellow-website.com/d8-react-base-theme-backend/sites/default/files/photo_placeholder/computer-4484282_1280.jpg';



  return (
    <div className={`
    ${variant === 'white'
        ? 'wide-image-white'
        : variant === 'dark' ? 'wide-image-dark' : 'wide-image-light'}`
    }>
      <img style={{
        width: "100%",
        height: "500px",
        objectFit: "cover"
      }} src={image} alt="wide" />
    </div>
  )
}

export default WideImage

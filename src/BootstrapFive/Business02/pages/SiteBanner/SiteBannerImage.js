import React from 'react';


function SiteBannerImage() {


  const image = "https://yellow-website.com/d8-react-base-theme-backend/sites/default/files/photo_placeholder/wellness-3793413_640.jpg"
  return (
    <img
      style={{
        maxWidth: "350px",
        width: "100%",
        margin: "0px auto",
        animation: "fadeIn 4s",
        animationFillMode: "both"
      }} src={image} alt="dev" />
  )
}

export default SiteBannerImage

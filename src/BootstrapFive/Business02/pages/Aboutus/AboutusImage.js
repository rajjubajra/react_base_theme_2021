import React from 'react';


function AboutusImage() {

  const image = 'https://yellow-website.com/d8-react-base-theme-backend/sites/default/files/photo_placeholder/landscape-166641_640.jpg';
  return (
    <>
      {/** DESKTOP */}
      <div className="d-none d-lg-block d-xl-block">
        <div className="aboutus-image d-flex justify-content-center">
          <img style={{
            maxWidth: "400px",
            width: "100%",
            margin: "0px auto",
            paddingTop: "10%",
          }}
            src={image} alt="about-us" />
        </div>
      </div>
      {/** TABLET */}
      <div className="d-none d-md-block d-lg-none d-xl-none">
        <div className="aboutus-image d-flex justify-content-center">
          <img style={{
            maxWidth: "400px",
            width: "100%",
            margin: "0px auto",
            paddingTop: "35%",
          }}
            src={image} alt="about-us" />
        </div>
      </div>
      {/** MOBILE */}
      <div className="d-block d-sm-block d-md-none d-lg-none d-xl-none">
        <div className="aboutus-image d-flex justify-content-center">
          <img style={{
            width: "100%",
            maxWidth: "400px",
            margin: "0px auto",
            paddingTop: "35%",
            objectFit: "cover"
          }}
            src={image} alt="about-us" />
        </div>
      </div>
    </>
  )
}

export default AboutusImage
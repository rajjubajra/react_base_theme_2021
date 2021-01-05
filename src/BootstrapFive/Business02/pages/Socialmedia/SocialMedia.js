import React from 'react'
import Title from '../global/Title';
import SocialMediaLinks from './SocialMediaLinks';
import './SocialMedia.scss';
// import CircleBackground from './CircleBackground';



function SocialMedia(props) {
  return (
    <div className="container" style={{
      position: "relative",
      width: "100%",
      height: "100vh",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      justifyContent: "center"
    }}>
      <div className="ms-5 justify-content-center">
        <Title title="Follow us" />
      </div>
      <div className="text-align-center mt-5">
        <SocialMediaLinks />
        {/*
        width exceed 100% need correction
         <CircleBackground /> */}
      </div>
    </div>
  )
}

export default SocialMedia

import React from 'react'
import { Link } from 'react-router-dom';



function SocialMedia() {

  const iconStyle = {
    width: "40%"
  }

  return (
    <div className="container social-media">
      <div className="row">
        <div className="col-lg-3 col-md-4 col-sm-4 d-flex">
          <Link to="#">
            <img style={iconStyle} className="img-fluid"
              src="https://yellow-website.com/d8-react-base-theme-backend/sites/default/files/photo_placeholder/instagram.svg"
              alt="icon"
            />
          </Link>
          <Link to="#">
            <img style={iconStyle} className="img-fluid"
              src="https://yellow-website.com/d8-react-base-theme-backend/sites/default/files/photo_placeholder/twitter.svg"
              alt="icon"
            />
          </Link>
        </div>
        <div className="col-lg-9 col-md-8 col-sm-8"></div>
      </div>
    </div>
  )
}

export default SocialMedia

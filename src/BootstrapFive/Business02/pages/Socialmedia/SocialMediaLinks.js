import React from 'react'
import { Link } from 'react-router-dom';



function SocialMediaLinks() {

  const styleIcon = {
    margin: "10px",
  }

  return (
    <div className="d-flex flex-wrap justify-content-center">
      <span className="badge">
        <Link style={styleIcon} to="#"><img src="https://yellow-website.com/d8-react-base-theme-backend/sites/default/files/photo_placeholder/facebook.svg" alt="facebook-icon" /></Link>
      </span>
      <span className="badge">
        <Link style={styleIcon} to="#">
          <img src="https://yellow-website.com/d8-react-base-theme-backend/sites/default/files/photo_placeholder/twitter.svg" alt="Twitter icon" />
        </Link>
      </span>
      <span className="badge">
        <Link style={styleIcon} to="#">
          <img src="https://yellow-website.com/d8-react-base-theme-backend/sites/default/files/photo_placeholder/youtube.svg" alt="youtube" />
        </Link>
      </span>
      <span className="badge">
        <Link style={styleIcon} to="#">
          <img src="https://yellow-website.com/d8-react-base-theme-backend/sites/default/files/photo_placeholder/instagram.svg" alt="instagram icon" />
        </Link>
      </span>
    </div>
  )
}

export default SocialMediaLinks
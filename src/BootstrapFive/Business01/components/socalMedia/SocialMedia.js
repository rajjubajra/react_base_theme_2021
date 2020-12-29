import React from 'react';
import IconSvgInstagram from './IconSvgInstagram';
import IconSvgTwitter from './IconSvgTwitter';
import { Link } from 'react-router-dom';


const linkStyle = {
  margin: "0px 10px"
}

function SocialMedia() {
  return (
    <div className="d-flex">
      <Link stye={linkStyle} to="#">
        <IconSvgInstagram width="20px" height="auto" />
      </Link>
      <Link style={linkStyle} to="#">
        <IconSvgTwitter width="20px" height="auto" />
      </Link>
    </div>
  )
}

export default SocialMedia
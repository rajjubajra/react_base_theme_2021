import React from 'react';
import IconSvgYoutube from '../PhotoPlaceholder/IconSvgYoutube';
import IconSvgSpotify from '../PhotoPlaceholder/IconSvgSpotify';
import IconSvgApple from '../PhotoPlaceholder/IconSvgApple';
import IconSvgInstagram from '../PhotoPlaceholder/IconSvgInstagram';
import IconSvgTwitter from '../PhotoPlaceholder/IconSvgTwitter';
import { Link } from 'react-router-dom';
import './SocialMediaDesktop.scss';



function SocialMediaDesktop() {


  /**
   * IMPORTANT NOTE: PLACING MUST BE AFTER NAVIGATION
   */

  return (
    <div className="social-media-desktop-3">
      <Link to="#">
        <IconSvgYoutube width="15px" height="auto" />
      </Link>
      <Link to="#">
        <IconSvgSpotify width="15px" height="auto" />
      </Link>
      <Link to="#">
        <IconSvgApple width="15px" height="auto" />
      </Link>
      <Link to="#">
        <IconSvgInstagram width="15px" height="auto" />
      </Link>
      <Link to="#">
        <IconSvgTwitter width="15px" height="auto" />
      </Link>
    </div>
  )
}

export default SocialMediaDesktop
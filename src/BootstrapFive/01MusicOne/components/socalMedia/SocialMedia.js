import React from 'react';
import IconSvgYoutube from '../PhotoPlaceholder/IconSvgYoutube';
import IconSvgSpotify from '../PhotoPlaceholder/IconSvgSpotify';
import IconSvgApple from '../PhotoPlaceholder/IconSvgApple';
import IconSvgInstagram from '../PhotoPlaceholder/IconSvgInstagram';
import IconSvgTwitter from '../PhotoPlaceholder/IconSvgTwitter';
import { Link } from 'react-router-dom';



function SocialMedia() {
  return (
    <>
      <Link to="#"><IconSvgYoutube width="20px" height="auto" /></Link>
      <Link to="#"><IconSvgSpotify width="20px" height="auto" /></Link>
      <Link to="#"><IconSvgApple width="20px" height="auto" /></Link>
      <Link to="#"><IconSvgInstagram width="20px" height="auto" /></Link>
      <Link to="#"><IconSvgTwitter width="20px" height="auto" /></Link>
    </>
  )
}

export default SocialMedia
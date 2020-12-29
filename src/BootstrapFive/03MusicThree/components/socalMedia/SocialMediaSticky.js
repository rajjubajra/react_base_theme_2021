import React, { useRef, useState, useEffect } from 'react';
import IconSvgYoutube from '../PhotoPlaceholder/IconSvgYoutube';
import IconSvgSpotify from '../PhotoPlaceholder/IconSvgSpotify';
import IconSvgApple from '../PhotoPlaceholder/IconSvgApple';
import IconSvgInstagram from '../PhotoPlaceholder/IconSvgInstagram';
import IconSvgTwitter from '../PhotoPlaceholder/IconSvgTwitter';
import { Link } from 'react-router-dom';
import './SocialMediaSticky.scss';



function SocialMediaSticky() {


  /** Intersecton Observer */
  const ref = useRef();
  const [obs, setObs] = useState(false);
  //console.log("observer", obs);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log("ENTRY", entry);
        // console.log("visible", entry.isVisible);
        // console.log("int ratio", entry.intersectionRatio);
        // console.log("is int-secting", entry.isIntersecting);
        setObs(entry.isVisible);

        if (entry.isIntersecting) {
          //do your actions here
          console.log('It works!')
          setObs(true)
        }
      },
      {
        root: null,
        rootMargin: "55% 0px 0px 0px",
        threshold: 0
      }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
  }, [ref]);

  /**
   * IMPORTANT NOTE: PLACING MUST BE AFTER NAVIGATION
   */

  return (
    <div ref={ref} className="social-media-sticky d-none d-md-block">
      <div className="social-media-icon-fixed" >
        <Link to="#"><IconSvgYoutube width="20px" height="auto" /></Link>
        <Link to="#"><IconSvgSpotify width="20px" height="auto" /></Link>
        <Link to="#"><IconSvgApple width="20px" height="auto" /></Link>
        <Link to="#"><IconSvgInstagram width="20px" height="auto" /></Link>
        <Link to="#"><IconSvgTwitter width="20px" height="auto" /></Link>
      </div>
    </div>
  )
}

export default SocialMediaSticky
import React, { useEffect, useState } from 'react';
import NavigationOne from '../../components/header/NavigationOne/NavigationOne';
import ColourMode from '../../components/ColourMode/ColourMode';
import { useSelector } from 'react-redux';

import SocialMediaSticky from '../../components/socalMedia/SocialMediaSticky';
import ContactDesktop from './ContactDesktop';
import ContactTablet from './ContactTablet';
import ContactMobile from './ContactMobile';


export const Contact = () => {

  const [className, setClassName] = useState('light');
  //const [colourVariant, setColourVariant] = useState('light');

  const colorMode = useSelector(state => state.reducerSelectColourMode.colourMode);
  const variant = useSelector(state => state.reducerSelectColourMode.variant);
  console.log(colorMode);

  useEffect(() => {
    setClassName(colorMode);
    //setColourVariant(variant);
  }, [colorMode, variant])

  const image = 'http://yellow-website.com/d8-react-base-theme-backend/sites/default/files/photo_placeholder/Music2011_4.JPG';

  return (
    <div className="music-one">

      <div className={className}>
        <ColourMode />
        <NavigationOne />
        <SocialMediaSticky />
        <div className="container min-vh-100 pb-5">
          {/** title */}
          <div className="row justify-content-center mt-5">
            <div className="col"><h1>Contact</h1></div>
          </div>

          <div className="d-none d-lg-block d-xl-block">
            <ContactDesktop image={image} />
          </div>

          <div className="d-none d-md-block d-lg-none d-xl-none">
            <ContactTablet image={image} />
          </div>

          <div className="d-block d-md-none d-lg-none d-xl-none">
            <ContactMobile image={image} />
          </div>


        </div>
      </div>

    </div>
  )
}

export default Contact;

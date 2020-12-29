import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ColourMode from '../../components/ColourMode/ColourMode';
import NavigationOne from '../../components/header/NavigationOne/NavigationOne';
import SocialMediaSticky from '../../components/socalMedia/SocialMediaSticky';
import LandingOne from '../Home/LandingOne/LandingOne';



function Home() {

  /** dyanamic colour */
  const [className, setClassName] = useState('light');
  //const [colourVariant, setColourVariant] = useState('light');

  const colorMode = useSelector(state => state.reducerSelectColourMode.colourMode);
  const variant = useSelector(state => state.reducerSelectColourMode.variant);
  console.log(colorMode);

  useEffect(() => {
    setClassName(colorMode);
    //setColourVariant(variant);
  }, [colorMode, variant])
  /** dynamic colour closed */

  useEffect(() => {
    window.scroll(0, 0);
  }, [])

  return (
    <div className="music-three">

      <div className={`${className}  min-vh-100`}>
        <ColourMode />
        <NavigationOne />
        <SocialMediaSticky />
        <LandingOne />
      </div>

    </div>
  )
}
export default Home;
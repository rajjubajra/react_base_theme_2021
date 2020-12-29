import React, { useEffect, useState } from 'react';
import NavigationOne from '../../components/header/NavigationOne/NavigationOne';
import ColourMode from '../../components/ColourMode/ColourMode';
import BoxSeven from './BoxSeven/BoxSeven';
import { useSelector } from 'react-redux';
import SocialMediaSticky from '../../components/socalMedia/SocialMediaSticky';


export const Gallery = () => {

  const [className, setClassName] = useState('light');
  //const [colourVariant, setColourVariant] = useState('light');

  const colorMode = useSelector(state => state.reducerSelectColourMode.colourMode);
  const variant = useSelector(state => state.reducerSelectColourMode.variant);
  console.log(colorMode);

  useEffect(() => {
    setClassName(colorMode);
    // setColourVariant(variant);
  }, [colorMode, variant])


  return (
    <div className="music-three">

      <div className={`${className} min-vh-100 pb-5`}>
        <ColourMode />
        <NavigationOne />
        <SocialMediaSticky />
        <div className="mb-5 pb-5">
          <BoxSeven />
        </div>
      </div>

    </div>
  )
}

export default Gallery;

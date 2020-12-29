import React from 'react';
import NavigationOne from '../../components/header/NavigationOne/NavigationOne';
import ColourMode from '../../components/ColourMode/ColourMode';
import BoxTwo from './BoxTwo/BoxTwo';
import { useSelector } from 'react-redux';
import SocialMediaSticky from '../../components/socalMedia/SocialMediaSticky';


export const Gallery = () => {



  const colorMode = useSelector(state => state.reducerSelectColourMode.colourMode);
  //const variant = useSelector(state => state.reducerSelectColourMode.variant);
  console.log(colorMode);




  return (
    <div className="music-one">
      <div className={`${colorMode} pb-5`}>
        <ColourMode />
        <NavigationOne />
        <SocialMediaSticky />
        <div className="mt-5 pb-5">
          <BoxTwo />
        </div>
      </div>
    </div>
  )
}

export default Gallery;

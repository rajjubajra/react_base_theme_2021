import React, { useEffect, useState } from 'react';
import NavigationOne from '../../components/header/NavigationOne/NavigationOne';
import ColourMode from '../../components/ColourMode/ColourMode';
import { useSelector, useDispatch } from 'react-redux';
import ColumnFour from './ColumnFour/ColumnFour';
import { actionFetchAbout } from './Redux/ActionFetchAbout';
import SocialMediaSticky from '../../components/socalMedia/SocialMediaSticky';





export const About = () => {

  /** Dyanmic colour  */
  const [className, setClassName] = useState('light');
  //const [colourVariant, setColourVariant] = useState('light');

  const colorMode = useSelector(state => state.reducerSelectColourMode.colourMode);
  const variant = useSelector(state => state.reducerSelectColourMode.variant);
  console.log(colorMode);

  useEffect(() => {
    setClassName(colorMode);
    //setColourVariant(variant);
  }, [colorMode, variant])
  /** Dyanmic colour closed */


  /** about data */
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actionFetchAbout());
  }, [dispatch])





  return (
    <div className="music-three">
      <div className={className}>
        <ColourMode />
        <NavigationOne />
        <SocialMediaSticky />
        <ColumnFour />
      </div>
    </div>
  )
}

export default About;

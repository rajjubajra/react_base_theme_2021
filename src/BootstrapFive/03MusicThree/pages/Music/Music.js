import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ColourMode from '../../components/ColourMode/ColourMode';
import NavigationOne from '../../components/header/NavigationOne/NavigationOne';
import SocialMediaSticky from '../../components/socalMedia/SocialMediaSticky';
import { ActionMusicThree } from '../Music/Redux/ActionMusicThree';
import BoxSeven from './BoxSeven/BoxSeven';




function Music() {

  /** dyanamic colour */
  const [className, setClassName] = useState('light');
  const [colourVariant, setColourVariant] = useState('light');

  const colorMode = useSelector(state => state.reducerSelectColourMode.colourMode);
  const variant = useSelector(state => state.reducerSelectColourMode.variant);
  //console.log(colorMode);

  useEffect(() => {
    setClassName(colorMode);
    setColourVariant(variant);
  }, [colorMode, variant])
  /** dynamic colour closed */

  useEffect(() => {
    window.scroll(0, 0);
  }, [])

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ActionMusicThree());
  }, [dispatch])

  return (
    <div className="music-three">

      <div className={`${className}  min-vh-100 pb-5`}>
        <ColourMode />
        <NavigationOne />
        <SocialMediaSticky />
        <div className="d-flex justify-content-center w-100 pb-5">
          <BoxSeven />
        </div>

      </div>
    </div>
  )
}

export default Music

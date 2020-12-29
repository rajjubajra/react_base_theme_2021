import React, { useEffect, useState } from 'react';
import NavigationOne from '../../components/header/NavigationOne/NavigationOne';
import ColourMode from '../../components/ColourMode/ColourMode';
import { useSelector } from 'react-redux';
import SocialMediaSticky from '../../components/socalMedia/SocialMediaSticky';
import FormSix from './Form/FormSix';
import Text from './Text';


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


  return (
    <div className="music-three">
      <div className={className}>
        <ColourMode />
        <NavigationOne />
        <SocialMediaSticky />
        <div className="container mt-5 min-vh-100">
          <div className="row">
            <div className="col-lg-4">
              <Text />
            </div>
            <div className="col-lg-8">
              <FormSix />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;

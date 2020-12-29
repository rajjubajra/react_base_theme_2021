import React, { useEffect, useState } from 'react';
import NavigationOne from '../../components/header/NavigationOne/NavigationOne';
import NavigationSeven from './SideMenu/NavigationSeven/NavigationSeven';
import ColourMode from '../../components/ColourMode/ColourMode';
import { useSelector } from 'react-redux';

function Shop() {
  const [className, setClassName] = useState('light');
  const [colourVariant, setColourVariant] = useState('light');

  const colorMode = useSelector(state => state.reducerSelectColourMode.colourMode);
  const variant = useSelector(state => state.reducerSelectColourMode.variant);
  console.log(colorMode);

  useEffect(() => {
    setClassName(colorMode);
    setColourVariant(variant);
  }, [colorMode, variant])

  return (
    <div className="music-three">

      <div className={className}>
        <ColourMode />
        <NavigationOne />
        <div className="container">
          <div className="row">
            <div className="col">
              <h1>Shop</h1>
              <NavigationSeven />
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
export default Shop
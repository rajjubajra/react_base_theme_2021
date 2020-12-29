import React from 'react';
import NavigationOne from '../../components/header/NavigationOne/NavigationOne';
import NavigationSeven from './SideMenu/NavigationSeven/NavigationSeven';
import ColourMode from '../../components/ColourMode/ColourMode';
import { useSelector } from 'react-redux';

function Shop() {


  const colorMode = useSelector(state => state.reducerSelectColourMode.colourMode);
  // const variant = useSelector(state => state.reducerSelectColourMode.variant);
  console.log(colorMode);



  return (
    <div className="music-one">

      <div className={colorMode}>
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
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NavIconThreeLines from './NavIconThreeLines';
import { MainMenuShowHide } from './Redux/ActionShowHide';


export const NavigationTwo = () => {

  const dispatch = useDispatch();

  /** colour variant */
  const variant = useSelector(state => state.reducerSelectColourMode.variant);

  return (
    <div style={{
      display: "block",
      position: "fixed",
      width: "100%",
      backgroundColor: variant === 'dark' ? "#1c3044" : variant === 'light' ? "#E9ECEF" : "#ffffff",
      zIndex: "50"
    }}>
      <div className='container-fluid'>
        <div className="row">
          <div className="col d-flex justify-content-between">

            <div onClick={() => dispatch(MainMenuShowHide())}>
              {/** navigation icon */}
              <NavIconThreeLines />
            </div>

            <div className="mt-2"><p>London: 0782 899 1384</p></div>

            <div className="mt-2"><p>Kathmandu: 435 2162</p></div>

            <div className="mt-2 pr-3">[]</div>

          </div>
        </div>
      </div>
    </div>
  )
}
export default NavigationTwo;
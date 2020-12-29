import React, { useEffect, useState } from 'react'
import './Tour.scss';
import NavigationOne from '../../components/header/NavigationOne/NavigationOne';
import ColourMode from '../../components/ColourMode/ColourMode';
import { useSelector, useDispatch } from 'react-redux';
import TourPlan from './TourPlan';
import SocialMediaSticky from '../../components/socalMedia/SocialMediaSticky';
import TourDetails from './TourDetails';
import IconClose from '../../components/Icon/IconClose';
import { actionHideTour } from './Redux/ActionHideTour';


function Tour() {
  /** DYNAMIC THEME COLOUR */
  const [className, setClassName] = useState('light');
  //const [colourVariant, setColourVariant] = useState('light');

  const colorMode = useSelector(state => state.reducerSelectColourMode.colourMode);
  const variant = useSelector(state => state.reducerSelectColourMode.variant);
  console.log(colorMode);

  useEffect(() => {
    setClassName(colorMode);
    //setColourVariant(variant);
  }, [colorMode, variant])
  /** DYNAMIC THEME COLOUR CLOSED */



  /** HIDE TOUR PLAN ON SMALL SCREEN WHILE DETAIL IS CLICKED */
  const dispatch = useDispatch();
  const hideTourPlan = useSelector(state => state.reducerHideTour.hide);



  return (
    <div className="music-three">

      <div className={`${className} min-vh-100 pb-5`}>
        <ColourMode />
        <NavigationOne />
        <SocialMediaSticky />
        <div className="container-fluid mt-5 pb-5">

          {/** TOUR PLAN */}
          <div className="row justify-content-center">
            {/** lg and md size  only*/}
            <div className="col-lg-5 col-md-6 d-none d-lg-block d-md-block d-xl-block">
              <TourPlan />
            </div>
            {/** sm size only */}
            <div className={`${hideTourPlan ? 'd-none' : 'col-sm-10'} d-md-none d-lg-none d-xl-none`}>
              <TourPlan />
            </div>


            {/** TOUR DETAILS */}
            <div className="col-lg-5 col-md-6 col-sm-10">

              <span className={`${hideTourPlan ? 'd-flex d-lg-none d-md-none d-xl-none' : 'd-none'}  justify-content-end`}
                onClick={() => dispatch(actionHideTour(false))}
              >
                <IconClose />
              </span>

              <TourDetails />
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Tour

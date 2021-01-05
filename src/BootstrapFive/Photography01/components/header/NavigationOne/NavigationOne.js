import React, { useEffect, useState } from 'react';
import Title from '../Title/Title';
import { pagelink } from '../../../PageLink';


import Navigation from './Navigation';
import NavIconThreeLines from './NavIconThreeLines';


const data = [
  {
    id: "1",
    name: "Product",
    link: `${pagelink.home}/product`
  },
  {
    id: 2,
    name: "Food",
    link: `${pagelink.home}/food`
  },
  {
    id: 3,
    name: "Travel",
    link: `${pagelink.home}/travel`
  },
  {
    id: 4,
    name: "About",
    link: pagelink.about
  },
  {
    id: 5,
    name: "Contact",
    link: pagelink.contact
  }
]

export const NavigationOne = () => {

  /** Window Breakpoint for mobile and tablet display */
  const mobileBreakPoint = 768;

  /** state "true" if browser size is less than "mobileBreakPoint" */
  const [windowSizeSmall, setWindowSizeSmall] = useState('');

  /** OnClick "Mobile Menu Icon[Three-lines], Veiw mobile menu" */
  const [view, setView] = useState(false);


  /** Runs Onload */
  useEffect(() => {
    console.log(window.innerWidth)
    window.innerWidth <= mobileBreakPoint
      ? setWindowSizeSmall(true)
      : setWindowSizeSmall(false);
  }, [])


  /** Runs while resize */
  useEffect(() => {
    window.onresize = function () {
      console.log(window.innerWidth)
      window.innerWidth <= mobileBreakPoint
        ? setWindowSizeSmall(true)
        : setWindowSizeSmall(false);
    }
  })

  return (
    <div className="photography-one">

      <div className="container">
        {/** ICON FOR TABLET AND MOBILE */}
        <div
          className={`${windowSizeSmall ? '' : 'd-none'}`}
          onClick={() => view ? setView(false) : setView(true)}
        >
          <NavIconThreeLines />
        </div>

        {/** NAVIGATION MENU */}
        <div>
          <Title />
          {windowSizeSmall === ''
            ? ''
            : <Navigation data={data} windowSizeSmall={windowSizeSmall} view={view} />}
        </div>
      </div>
    </div>
  )
}

export default NavigationOne;

import React, { useState, useEffect } from 'react';
import './NavigationEight.scss';
import { useSelector } from 'react-redux';
import NavigationDesktop from './NavigationDesktop';
import NavigationTablet from './NavigationTablet';
import NavigationMobile from './NavigationMobile';


const data = [
  {
    id: 1,
    name: "Home",
    link: "b4-business-three#home"
  },
  {
    id: 2,
    name: "About",
    link: "b4-business-three#about"
  },
  {
    id: 3,
    name: "Services",
    link: "b4-business-three#services"
  },
  {
    id: 4,
    name: "Portfolio",
    link: "b4-business-three#portfolio"
  },
  {
    id: 5,
    name: "Team",
    link: "b4-business-three#team"
  },
  {
    id: 6,
    name: "Contact",
    link: "b4-business-three#contact"
  }
]


const title = "Buzi-Four";
const signature = "by Yellowebsite";

const subTitleFontStyle = {
  fontFamily: "'Mrs Saint Delafield', cursive",
  letterSpacing: "0.2rem",
  fontWeight: "400",
  transform: "scaleY(1.5)"
}

function NavigationEight() {


  /** colour variant */
  const variant = useSelector(state => state.reducerSelectColourMode.variant);

  /** SCROLL UP / DOWN EVENT */
  const [scrollDirection, setScrollDirection] = useState(null);


  useEffect(() => {
    var lastScrollTop = 0;
    // element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
    window.addEventListener("scroll", function () { // or window.addEventListener("scroll"....
      var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
      if (st > lastScrollTop) {
        // downscroll code
        // console.log('goind up');
        setScrollDirection(1)
      } else {
        // upscroll code
        // console.log("going down");
        setScrollDirection(-1)
      }
      lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
    }, false);
  }, [])



  return (
    <div
      style={{
        position: scrollDirection === -1 ? "sticky" : "relative",
        top: "0px",
        zIndex: "20",
        backgroundColor: variant === 'dark' ? '#1c3044' : variant === 'light' ? '#E9ECEF' : '#ffffff',
        width: "100%",
      }}
      className="container-fluid navigation-eight">
      <div className="d-none d-lg-block d-xl-block">
        <NavigationDesktop
          data={data}
          title={title}
          signature={signature}
          subTitleFontStyle={subTitleFontStyle} />
      </div>

      <div className="d-none d-md-block d-lg-none d-xl-none">
        <NavigationTablet
          data={data}
          title={title}
          signature={signature}
          subTitleFontStyle={subTitleFontStyle} />
      </div>

      <div className="d-block d-sm-block d-md-none d-lg-none d-xl-none">
        <NavigationMobile
          data={data}
          title={title}
          signature={signature}
          subTitleFontStyle={subTitleFontStyle} />
      </div>

    </div>
  )
}

export default NavigationEight

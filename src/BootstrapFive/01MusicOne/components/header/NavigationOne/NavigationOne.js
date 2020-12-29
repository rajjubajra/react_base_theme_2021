import React, { useEffect, useState } from 'react';
import Navigation from './Navigation';
import NavIconThreeLines from './NavIconThreeLines';
//import { pagelink } from '../../../PageLink';
import { useDispatch, useSelector } from 'react-redux';
import { actionFetchMenu } from './Redux/actionFetchMenu';


// const data = [
//   {
//     id: "1",
//     name: "Home",
//     link: pagelink.home
//   },
//   {
//     id: "2",
//     name: "Tour",
//     link: pagelink.tour
//   },
//   {
//     id: 3,
//     name: "News",
//     link: pagelink.news
//   },
//   {
//     id: 4,
//     name: "About",
//     link: pagelink.about
//   },
//   {
//     id: 5,
//     name: "Gallery",
//     link: pagelink.gallery
//   },
//   {
//     id: 6,
//     name: "Music",
//     link: pagelink.albums
//   },
//   {
//     id: 8,
//     name: "Contact",
//     link: pagelink.contact
//   },
//   {
//     id: 9,
//     name: "Back",
//     link: pagelink.back
//   },
// ]

export const NavigationOne = () => {

  const dispatch = useDispatch();

  const variant = useSelector(state => state.reducerSelectColourMode.variant);

  /** fetch menu data  */
  useEffect(() => {
    dispatch(actionFetchMenu());
  }, [dispatch])
  /**

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
    <div style={{
      height: "45px",
      position: scrollDirection === -1 ? "sticky" : "relative",
      top: "0px",
      zIndex: "20",
      background: variant === 'dark' ? " #1a2e42" : variant === 'light' ? " #E9ECEF" : " ",
    }}>
      {/** ICON FOR TABLET AND MOBILE */}
      <div
        className={`${windowSizeSmall ? '' : 'd-none'}`}
        onClick={() => view ? setView(false) : setView(true)}
      >
        <NavIconThreeLines />
      </div>

      {/** NAVIGATION MENU */}
      <div className="main-nav d-flex justify-content-center">
        {windowSizeSmall === ''
          ? ''
          : <Navigation
            windowSizeSmall={windowSizeSmall}
            view={view} />}
      </div>
    </div>
  )
}

export default NavigationOne;

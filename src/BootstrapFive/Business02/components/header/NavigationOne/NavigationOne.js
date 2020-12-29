import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionFetchMenu } from './Redux/actionFetchMenu';
import NavDesktop from './NavDesktop';
import NavMobile from './NavMobile';


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

  /** dyanamic layout colour */
  const baseTheme = useSelector(state => state.reducerSelectColourMode.colourMode);
  const variant = useSelector(state => state.reducerSelectColourMode.variant);




  /** fetch menu data  */
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actionFetchMenu());
  }, [dispatch])

  const ywLogo = "https://yellow-website.com/d8-react-base-theme-backend/sites/default/files/photo_placeholder/yellow-website-square240x240.png";


  /** get data from reducer */
  const data = useSelector(state => state.reducerFetchMenu.data);
  const dataLength = useSelector(state => state.reducerFetchMenu.dataLength);
  const linkPrefix = useSelector(state => state.reducerFetchMenu.linkPrefix);


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


  const linkStyle = {
    fontSize: "clamp(1.0rem, 5vw, 0.8rem)",
    color: "#000",
    letterSpace: "0.15rem",
    fontWeight: "300",
    margin: "0px 10px",
    textDecoration: "none",
    listStyle: "none"
  }


  return (
    <div
      className="blog-one"
      style={{
        position: scrollDirection === -1 ? "sticky" : "relative",
        top: "0px",
        zIndex: "1000",
        background: variant === 'dark' ? "#333" : "rgba(255, 255, 255, 0.90)",
        width: "100%",
      }}>

      <div className={`${baseTheme} ${variant}`}>



        {/** NAVIGATION MENU DESKTOP */}
        <div className="d-none d-lg-block d-xl-block w-100">
          <NavDesktop
            data={data}
            dataLength={dataLength}
            linkPrefix={linkPrefix}
            linkStyle={linkStyle}
            ywLogo={ywLogo}
          />
        </div>
        <div className="d-block d-sm-block d-md-block d-lg-none d-xl-none">
          <NavMobile
            data={data}
            dataLength={dataLength}
            linkPrefix={linkPrefix}
            linkStyle={linkStyle}
            ywLogo={ywLogo}
          />
        </div>
      </div>
    </div>
  )
}

export default NavigationOne;
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ColourMode from '../components/ColourMode/ColourMode';
import NavigationTwo from '../components/header/NavigationTwo/NavigationTwo';
import GalleryHorizontal from './GalleryHorizontal/GalleryHorizontal';
import { actionFetchData } from './Redux/ActionFetchData';
import HomeDesktop from './Home/HomeDesktop';
import HomeTablet from './Home/HomeTablet';
import HomeMobile from './Home/HomeMobile';



export default function Home() {

  /** COLOUR MODE */
  const className = useSelector(state => state.reducerSelectColourMode.colourMode);
  //const ColourVariant = useSelector(state => state.reducerSelectColourMode.variant);


  /** VIEW AND HIDE STATE */
  const view = useSelector(state => state.reducerShowHide.view);

  useEffect(() => {
    window.scrollTo(0, 0);
  })


  /** when main landing page in view 
   * Gallery page will be hidden */
  const galleryStyle = {
    display: view ? "none" : "block",
    transitionProperty: "display",
    transitionDuration: "3s",
  }


  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actionFetchData());
  }, [dispatch])

  const fetched = useSelector(state => state.reducerFetchData.fetched);
  const logoHorz = useSelector(state => state.reducerFetchData.logoHorizontal);
  const logoHorzAlt = useSelector(state => state.reducerFetchData.logoHorizontalAlt);
  const logoSquare = useSelector(state => state.reducerFetchData.logoSquare);
  const logoSquareAlt = useSelector(state => state.reducerFetchData.logoSquareAlt);
  const body = useSelector(state => state.reducerFetchData.body);
  const links = useSelector(state => state.reducerFetchData.links);
  const title = useSelector(state => state.reducerFetchData.title);

  /** React-spring 
   * animation */



  return (
    <div className='yellow-website-zero'>

      <div className={className}>
        <ColourMode />
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              {/** Landing Page is in NAVIGATION PAGE */}
              <NavigationTwo />
              <div style={{
                position: "relative",
                transitionProperty: "margin",
                transitionDuration: "1.5s",
                marginTop: view ? "20px" : -1000,
                width: "100%",
                justifyContent: "center",
                display: "flex",
                zIndex: "1",
              }}>
                <div className="d-none d-lg-block d-xl-block w-100 min-vh-100">
                  <HomeDesktop
                    fetched={fetched}
                    logoHorz={logoHorz}
                    logoHorzAlt={logoHorzAlt}
                    logoSquare={logoSquare}
                    logoSquareAlt={logoSquareAlt}
                    body={body}
                    links={links}
                    title={title}
                  />
                </div>
                <div className="d-none d-md-block d-lg-none d-xl-none w-100 min-vh-100">
                  <HomeTablet
                    fetched={fetched}
                    logoHorz={logoHorz}
                    logoHorzAlt={logoHorzAlt}
                    logoSquare={logoSquare}
                    logoSquareAlt={logoSquareAlt}
                    body={body}
                    links={links}
                    title={title}
                  />
                </div>
                <div className="d-block d-sm-block d-md-none d-lg-none d-xl-none w-100 min-vh-100">
                  <HomeMobile
                    fetched={fetched}
                    logoHorz={logoHorz}
                    logoHorzAlt={logoHorzAlt}
                    logoSquare={logoSquare}
                    logoSquareAlt={logoSquareAlt}
                    body={body}
                    links={links}
                    title={title}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <div style={galleryStyle}>
                <GalleryHorizontal />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

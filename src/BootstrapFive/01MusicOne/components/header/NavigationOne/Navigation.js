import React from 'react';
import { useSelector } from 'react-redux';
import NavMobile from './NavMobile';
import NavDesktop from './NavDesktop';




function Navigation(props) {


  /** get data from reducer */
  const data = useSelector(state => state.reducerFetchMenu.data);
  const dataLength = useSelector(state => state.reducerFetchMenu.dataLength);
  const linkPrefix = useSelector(state => state.reducerFetchMenu.linkPrefix);
  console.log("NAVIGATION PAGE", data);


  const linkStyle = {
    fontSize: "clamp(0.7rem, 5vw, 0.8rem)",
    color: "#000",
    letterSpace: "0.15rem",
    fontWeight: "300",
    textTransform: "uppercase",
    margin: "0px 10px",
    textDecoration: "none",
    listStyle: "none"
  }

  return (
    <>
      {/** MOBILE AND TABLET */}
      <NavMobile
        linkStyle={linkStyle}
        view={props.view}
        windowSizeSmall={props.windowSizeSmall}
        data={data}
        dataLength={dataLength}
        linkPrefix={linkPrefix}
      />
      {/** disktop */}
      <NavDesktop
        linkStyle={linkStyle}
        windowSizeSmall={props.windowSizeSmall}
        data={data}
        dataLength={dataLength}
        linkPrefix={linkPrefix}
      />
    </>
  )
}

export default Navigation
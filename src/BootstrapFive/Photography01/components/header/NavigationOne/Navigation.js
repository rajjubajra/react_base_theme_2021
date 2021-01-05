import React from 'react';
import NavMobile from './NavMobile';
import NavDesktop from './NavDesktop';

function Navigation(props) {
  return (
    <>
      {/** MOBILE AND TABLET */}
      <NavMobile
        view={props.view}
        windowSizeSmall={props.windowSizeSmall}
        data={props.data}
      />
      {/** disktop */}
      <NavDesktop
        windowSizeSmall={props.windowSizeSmall}
        data={props.data}
      />
    </>
  )
}

export default Navigation

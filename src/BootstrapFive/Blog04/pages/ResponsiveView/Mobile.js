import React from 'react';
import './Mobile.scss';
import Iframe from 'react-iframe';


function Mobile(props) {


  const { homepage } = props;

  const width = "320px";
  const height = "570px";


  return (
    <div className="container mobile">

      {/** HORIZONTA VIEW */}
      <div className="row">
        <div className="col d-flex justify-content-center">
          <div className="mobile-horizontal">
            <div id="mobile-h">
              <Iframe
                url={homepage}
                width={width}
                height={height}
                id="myId"
                className="myClassname"
                display="initial"
                position="relative" />
            </div>
          </div>
        </div>
      </div>

      {/** VERTICLE VIEW */}
      <div className="row mb-5">
        <div className="col d-flex justify-content-center pb-5">
          <div className="mobile-verticle">
            <div id="mobile-v">
              <Iframe
                url={homepage}
                width={height}
                height={width}
                id="myId"
                className="myClassname"
                display="initial"
                position="relative" />
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Mobile

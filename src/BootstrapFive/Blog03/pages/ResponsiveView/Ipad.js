import React from 'react';
import './Ipad.scss';
import Iframe from 'react-iframe';


function Ipad(props) {


  const { homepage } = props;

  const width = "768px";
  const height = "1024px";



  return (
    <div className="container Ipad">


      {/** HORIZONTA VIEW */}
      <div className="row">
        <div id="ipad-h" className="col d-flex justify-content-center w-100">
          <div className="ipad-horizontal mt-5">
            <div>
              <Iframe
                url={homepage}
                width={width}
                height={height}
                id="myId"
                className="iframe-desktop"
                display="initial"
                position="relative" />
            </div>
          </div>
        </div>
      </div>

      {/** VERTICLE VIEW */}
      <div className="row mt-5">
        <div className="col mt-3 d-flex justify-content-center">
          <div className="ipad-verticle">
            <div id="ipad-v" className="mt-5">
              <Iframe
                url={homepage}
                width={height}
                height={width}
                id="myId"
                className="iframe-mobile"
                display="initial"
                position="relative" />
            </div>
          </div>
        </div>
      </div>



    </div>
  )
}

export default Ipad

import React from 'react';
import Image from './Image';

function HomeDesktop() {

  const fontPosition = {
    position: "absolute",
    top: "43%",
    textAlign: "center",
    width: "100%",
    background: "#ffffff",
    padding: "35px 0px"
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col d-flex justify-content-center">
          <Image />
          <div style={fontPosition}>
            <h1
              style={{ fontFamily: "'Mrs Saint Delafield', cursive" }}
              className="display-1">Website By Rdb</h1>
          </div>

        </div>
      </div>


    </div>
  )
}

export default HomeDesktop

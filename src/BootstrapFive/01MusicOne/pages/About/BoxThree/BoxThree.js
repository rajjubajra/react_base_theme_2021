import React from 'react'
import PhotoBox from './PhotoBox';


export const BoxThree = () => {
  return (
    <div style={{ width: "100%", minHeight: "100vh" }}>

      <div className="container mb-5">
        <div className="row">
          <div className="col d-flex f-wrap" style={{ flexWrap: "wrap" }}>
            <PhotoBox />
            <PhotoBox />
            <PhotoBox />
            <PhotoBox />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BoxThree;

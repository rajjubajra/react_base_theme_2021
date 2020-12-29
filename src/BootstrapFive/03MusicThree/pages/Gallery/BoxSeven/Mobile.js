import React from 'react'
import PhotoBox from './PhotoBox';
import PhotoMusic from '../../../components/PhotoPlaceholder/PhotoMusic';

function Mobile(props) {

  const longPhotoStyle = {
    margin: "7px",
  }

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div style={longPhotoStyle}>
          <h1>{props.title}</h1>
          <div className="col-12 d-flex justify-content-center">
            <PhotoMusic
              className="d-block w-100"
              width="100%"
              height="200px"
            />
          </div>
        </div>
      </div>
      <div className="row d-flex flex-wrap justify-content-center">
        <div className="col-11"><PhotoBox width="100%" height="330px" /></div>
        <div className="col-11"><PhotoBox width="100%" height="330px" /></div>
        <div className="col-11"><PhotoBox width="100%" height="330px" /></div>
        <div className="col-11"><PhotoBox width="100%" height="330px" /></div>
        <div className="col-11"><PhotoBox width="100%" height="330px" /></div>
        <div className="col-11"><PhotoBox width="100%" height="330px" /></div>
      </div>
    </div>
  )
}

export default Mobile

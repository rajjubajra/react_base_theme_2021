import React from 'react'

import PhotoBox from './PhotoBox';




export const BoxTwo = () => {

  const imgA = 'http://yellow-website.com/d8-react-base-theme-backend/sites/default/files/photo_placeholder/Music2011_3.JPG';
  const imgB = 'http://yellow-website.com/d8-react-base-theme-backend/sites/default/files/photo_placeholder/Music2011_5.JPG';
  const imgC = 'http://yellow-website.com/d8-react-base-theme-backend/sites/default/files/photo_placeholder/Music2011_10.JPG';
  const imgD = 'http://yellow-website.com/d8-react-base-theme-backend/sites/default/files/photo_placeholder/Music2011_14.JPG';
  const imgE = 'http://yellow-website.com/d8-react-base-theme-backend/sites/default/files/photo_placeholder/Music2011_7.JPG';

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-6 mt-1">
          <PhotoBox img={imgA} width="100%" height="auto" />
        </div>
        <div className="col-lg-6 col-md-6 mt-1">
          <PhotoBox img={imgB} width="100%" height="auto" />
        </div>
        <div className="col-lg-6 col-md-6 mt-1">
          <PhotoBox img={imgC} width="100%" height="auto" />
        </div>
        <div className="col-lg-6 col-md-6 mt-1">
          <PhotoBox img={imgD} width="100%" height="auto" />
        </div>
        <div className="col-lg-6 col-md-6 mt-1">
          <PhotoBox img={imgE} width="100%" height="auto" />
        </div>
      </div>
    </div>

  )
}

export default BoxTwo;

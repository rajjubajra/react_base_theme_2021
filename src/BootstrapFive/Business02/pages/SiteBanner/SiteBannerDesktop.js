import React from 'react';
import SiteBannerTitle from './SiteBannerTitle';
import SiteBannerImage from './SiteBannerImage';


function SiteBannerDesktop() {

  const imgPosition = {
    minHeight: "90vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }

  const styleSiteTitle = {
    minHeight: "90vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  }

  return (
    <div className="container">
      <div className="row">
        <div className="text-center col-lg-6 col-md-6">
          <div style={styleSiteTitle}>
            <SiteBannerTitle />
          </div>
        </div>
        <div className="text-center col-lg-6 col-md-6">
          <div style={imgPosition}>
            <SiteBannerImage />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SiteBannerDesktop

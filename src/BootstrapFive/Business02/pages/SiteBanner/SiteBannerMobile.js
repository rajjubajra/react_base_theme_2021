import React from 'react'
import SiteBannerTitle from './SiteBannerTitle';
import SiteBannerImage from './SiteBannerImage';


function SiteBannerMobile() {
  return (
    <div className="container">
      <div className="row">
        <div className="text-center col-lg-6 col-md-6 mb-4">
          <div>
            <SiteBannerTitle />
          </div>
        </div>
        <div className="text-center col-lg-6 col-md-6">
          <div>
            <SiteBannerImage />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SiteBannerMobile

import React from 'react'
import SiteBannerDesktop from './SiteBannerDesktop';
import SiteBannerMobile from './SiteBannerMobile';


function SiteBanner() {

  return (
    <>
      <div className="d-none d-md-block d-lg-block d-xl-block w-100">
        <SiteBannerDesktop />
      </div>
      <div className="d-block d-md-none d-lg-none d-xl-none w-100">
        <SiteBannerMobile />
      </div>
    </>
  )
}

export default SiteBanner

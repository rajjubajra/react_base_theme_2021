import React from 'react'
import Desktop from './Desktop';
import Tablet from './Tablet';
import Mobile from './Mobile';


function LandingOne() {

  return (
    <div className="container-fluid mt-5 mb-5 min-vh-100">
      <div className="row justify-content-center">
        <div className="d-none d-lg-block">
          <Desktop />
        </div>
        <div className="d-none d-md-block d-lg-none">
          <Tablet />
        </div>
        <div className="d-block d-sm-block d-md-none d-lg-none">
          <Mobile />
        </div>

      </div>
    </div>
  )
}
export default LandingOne
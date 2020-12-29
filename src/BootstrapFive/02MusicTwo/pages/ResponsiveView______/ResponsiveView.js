import React, { useEffect, useState } from 'react';
import NavigationOne from '../../components/header/NavigationOne/NavigationOne';
import Ipad from './Ipad';
import Mobile from './Mobile';
import { pagelink } from '../../PageLink'


function ResponsiveView() {



  useEffect(() => {
    window.scroll(0, 0);
  }, [])


  const [homepage, setHomepage] = useState('');

  useEffect(() => {
    setHomepage(`${window.location.origin}/${pagelink.iframeVeiw}`);
  }, [])


  return (
    <div style={{ background: "#ddd" }}>

      <NavigationOne />
      <div className="container-fluid pb-5">

        <div className="row justify-content-center my-5">
          <h3>Responsive View</h3>
        </div>

        <div className="row">
          <Ipad homepage={homepage} />
          <Mobile homepage={homepage} />
        </div>

      </div>

    </div>
  )
}

export default ResponsiveView

import React, { useEffect, useState } from 'react';
import Ipad from './Ipad';
import Mobile from './Mobile';
import { pagelink } from '../PageLink';
import IconClose from './IconClose';
import { Link } from 'react-router-dom';


function ResponsiveView() {



  useEffect(() => {
    window.scroll(0, 0);
  }, [])


  const [homepage, setHomepage] = useState('');

  useEffect(() => {
    setHomepage(`${window.location.origin}/${pagelink.basetheme}`);
  }, [])

  console.log("IFRAM URL", homepage);

  return (
    <div style={{ background: "#ddd" }}>



      <div className="container-fluid pb-5">

        <div className="row justify-content-end py-5">
          <Link
            style={{
              position: "fixed",
              top: "100px",
              right: "10px",
              zIndex: "50"
            }}
            to={pagelink.home}><IconClose /></Link>
        </div>

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

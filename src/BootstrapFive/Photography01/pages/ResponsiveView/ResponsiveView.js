import React, { useEffect, useState } from 'react';
import Ipad from './Ipad';
import Mobile from './Mobile';
import { pagelink } from '../../PageLink'
import IconClose from './IconClose';
import { Link } from 'react-router-dom';


function ResponsiveView() {



  useEffect(() => {
    window.scroll(0, 0);
  }, [])


  const [homepage, setHomepage] = useState('');

  useEffect(() => {
    setHomepage(`${window.location.origin}/${pagelink.iframeView}`);
  }, [])

  console.log("IFRAM URL", homepage);

  return (
    <div style={{ background: "#ddd" }}>


      <div className="container-fluid pb-5">

        <div className="row my-5">
          <div className="col d-flex justify-content-between">
            <h3>Responsive View</h3>
            <Link to={pagelink.home}><IconClose /></Link>
          </div>
        </div>

        <div className="row">
          <div className="d-flex justify-content-center">
            <div>
              <Ipad homepage={homepage} />
              <Mobile homepage={homepage} />
            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default ResponsiveView

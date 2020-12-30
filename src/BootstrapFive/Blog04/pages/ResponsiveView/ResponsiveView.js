import React, { useEffect, useState } from 'react';
import Ipad from './Ipad';
import Mobile from './Mobile';
import { pagelink } from '../../PageLink';
import { Link } from 'react-router-dom';
import IconClose from '../../components/Icon/IconClose';


function ResponsiveView() {


  const [homepage, setHomepage] = useState('');

  useEffect(() => {
    setHomepage(`${window.location.origin}/${pagelink.iframeView}`);
  }, [])


  return (
    <div style={{ background: "#ddd" }}>


      <div className="container-fluid pb-5">

        <div className="row">
          <div className="col d-flex justify-content-between">
            <h3>Responsive View</h3>
            <Link to={pagelink.home}><IconClose /></Link>
          </div>
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
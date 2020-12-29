import React from 'react';
import { useSelector } from 'react-redux';
import Desktop from './Desktop';
import Mobile from './Mobile';
import Tablet from './Tablet';


export const ColumnFour = () => {

  /** ABOUT DATA */
  const state = useSelector(state => state.reducerFetchAbout.data);
  const dataLength = useSelector(state => state.reducerFetchAbout.dataLength);

  const img = 'http://yellow-website.com/d8-react-base-theme-backend/sites/default/files/photo_placeholder/Music2011_14.JPG'

  return (
    <div className="container-fluid mt-5">
      <div className="row">
        <div className="d-none d-lg-block d-xl-block">
          <Desktop img={img} dataLength={dataLength} state={state} />
        </div>
        <div className="d-none d-md-block d-lg-none">
          <Tablet img={img} dataLength={dataLength} state={state} />
        </div>
        <div className="d-sm-block d-md-none d-lg-none d-xl-none">
          <Mobile img={img} dataLength={dataLength} state={state} />
        </div>
      </div>
    </div>
  )
}
export default ColumnFour;

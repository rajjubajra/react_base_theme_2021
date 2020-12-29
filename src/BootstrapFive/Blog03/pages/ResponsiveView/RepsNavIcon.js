import React from 'react';
import './RapsNavIcon.scss';
import { Link } from 'react-router-dom';
import { pagelink } from '../../PageLink';
import IconDisplay from './IconDisplay';

function RepsNavIcon() {
  return (
    <div style={{
      position: "fixed",
      zIndex: "50",
      top: "250px",
      right: "7px",
      padding: "0px 2px"
    }}>
      <Link
        className="res-view-icon"
        to={`${pagelink.responsiveView}`} >
        <IconDisplay />
      </Link>
    </div >
  )
}

export default RepsNavIcon

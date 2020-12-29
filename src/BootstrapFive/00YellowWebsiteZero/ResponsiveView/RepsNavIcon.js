import React from 'react';
import { Link } from 'react-router-dom';
import { pagelink } from '../../PageLink';

function RepsNavIcon() {
  return (
    <div style={{
      position: "fixed",
      zIndex: "20",
      top: "300px",
      right: "-43px",
      transform: "rotate(90deg)"
    }}>
      <Link to={`${pagelink.responsiveView}`}>Responsive View</Link>
    </div>
  )
}

export default RepsNavIcon

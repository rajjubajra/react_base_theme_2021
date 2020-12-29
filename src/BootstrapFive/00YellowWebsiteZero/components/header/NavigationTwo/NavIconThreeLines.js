import React, { useState } from 'react';
import './NavIconThreeLines.scss';

const BtnThreelines = (props) => {

  const [btnOpen, setBtnOpen] = useState(false);

  function btnToggle() {
    btnOpen ? setBtnOpen(false) : setBtnOpen(true);
  }

  return (
    <button
      className={`nav-toggle ${btnOpen ? 'open' : ''}`}
      onClick={() => btnToggle()}>
      <span className="threelines"></span>
    </button>
  )
}

export default BtnThreelines

import React, { useState } from 'react';
import './NavIconThreeLines.scss';
import { useSelector } from 'react-redux';

const BtnThreelines = (props) => {

  /** color variant */
  const variant = useSelector(state => state.reducerSelectColourMode.variant);

  const [btnOpen, setBtnOpen] = useState(false);

  function btnToggle() {
    btnOpen ? setBtnOpen(false) : setBtnOpen(true);
  }

  return (
    <button
      className={`nav-toggle ${btnOpen ? 'open' : ''}`}
      onClick={() => btnToggle()}>
      <span
        className={`${variant === 'dark' ? 'threelines-dark' : 'threelines'}`}></span>
    </button>
  )
}

export default BtnThreelines

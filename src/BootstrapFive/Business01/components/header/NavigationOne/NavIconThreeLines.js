import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './NavIconThreeLines.scss';


const BtnThreelines = (props) => {

  //const variant = useSelector(state => state.reducerSelectColourMode.variant);

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

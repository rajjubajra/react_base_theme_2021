import React, { useState } from 'react';
import Navigation from './Navigation';
import NavIconThreeLines from './ThreeLines/NavIconThreeLines';

function NavigationSeven() {

  const [view, setView] = useState(false)


  const menuStyle = {
    position: "relative",
    left: view ? "0px" : "-650px",
    maxWidth: "300px",
    transition: "left 0.5s linear"
  }

  return (
    <div className="navigation-7">
      <div
        style={{ width: "60px" }}
        onClick={() => setView(view ? false : true)}>
        <NavIconThreeLines />
      </div>
      <div style={menuStyle}>
        <Navigation />
      </div>
    </div>
  )
}
export default NavigationSeven
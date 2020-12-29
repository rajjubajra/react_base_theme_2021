import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import SocialMedia from '../../socalMedia/SocialMedia';
import NavIconThreeLines from './NavIconThreeLines';




/** Tablet and Mobile */
function NavMobile(props) {

  const variant = useSelector(state => state.reducerSelectColourMode.variant);
  const [view, setView] = useState(false);


  const ulStyle = {
    position: "absolute",
    top: view ? 40 : -200,
    listStyle: "none",
    transition: "top 1s linear",
    background: variant === 'dark' ? "#333" : "#fff",
    padding: "10px 40px",
    minWidth: "250px",
    lineHeight: "2.5rem",
  }


  function handleIcon() {
    view ? setView(false) : setView(true);
  }


  return (
    <div className="d-flex justify-content-between">
      {/** view: true/false based on display size */}
      <div style={{ position: "relative", top: 0 }}>

        <span onClick={() => handleIcon()}><NavIconThreeLines /></span>

        <ul style={ulStyle} >
          {
            props.dataLength > 0 &&
            props.data.map(item => {
              const { id, path, name } = item;
              return <li key={id}>
                <Link to={`/${path}`} >
                  {name}
                </Link>
              </li>
            })
          }
        </ul>
      </div>

      <div
        style={{
          position: "fixed",
          right: "10px",
          top: "8px",
          Zindex: "100",
          display: "flex",
        }}>
        <SocialMedia />
      </div>

    </div >
  )
}

export default NavMobile

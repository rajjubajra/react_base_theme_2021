import React, { useState } from 'react';
//import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import NavIconThreeLines from './NavIconThreeLines';


function NavigationMobile(props) {

  const variant = useSelector(state => state.reducerSelectColourMode.variant);

  const { title, signature, data, subTitleFontStyle } = props;

  const [view, setView] = useState(false);

  const navs = {
    position: "relative",
    top: view ? "350px" : "0",
    transition: "top 1s linear",
    background: variant === 'dark' ? "rgb(23 36 53)" : "#ffffff",
    width: "100%",
    zIndex: view ? 1 : -1,
    marginTop: "-350px",
    backgroundColor: "#fafafa",
    height: "200px",
    outline: variant === 'dark' ? "1px solid #ffffff66" : "1px solid #ffffff",
    outlineOffset: "-5px",
  }

  return (
    <>
      <div className="row">
        <div className="col-sm-6">
          <div onClick={() => view === false ? setView(true) : setView(false)}>
            <NavIconThreeLines />
          </div>
        </div>
        <div className="col-sm-6">
          <div className="d-flex justify-content-end">
            <div>
              <h3>{title}</h3>
              <p style={subTitleFontStyle} className="siganture-small">{signature}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <ul
          style={navs}
          className="mobile">
          {
            data.length > 0 &&
            data.map(item => {
              return <li
                onClick={() => setView(false)}
                className="link-item">
                <a href={`/${item.link}`}>{item.name}</a>
              </li>
            })
          }
        </ul>
      </div>

    </>
  )
}

export default NavigationMobile

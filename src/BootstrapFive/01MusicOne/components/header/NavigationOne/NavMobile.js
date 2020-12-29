import React from 'react';
import { Link } from 'react-router-dom';
import SocialMedia from '../../socalMedia/SocialMedia';

/** Tablet and Mobile */

const ulStyle = {
  listStyle: "none"
}

function NavMobile(props) {
  return (
    <div style={{
      /** some reason transition duration not working  */
      position: "absolute",
      transitionProperty: "top",
      transitionDuration: "2s",
      top: props.view ? 43 : -200,
      background: "rgba(255,255,255,0.90)",
      width: "100%"
    }}>
      {/** view: true/false based on display size */}
      <ul style={ulStyle} className={`${props.view && props.windowSizeSmall ? 'flex-column' : 'd-none'}`}>
        {
          props.dataLength > 0 &&
          props.data.map(item => {
            const { id, path, name } = item;
            return <li key={id}>
              <Link
                style={props.linkStyle}
                to={`/${path}`}
              >
                {name}
              </Link>
            </li>
          })
        }
      </ul>

      <div
        className="d-md-none d-lg-none d-xl-none"
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

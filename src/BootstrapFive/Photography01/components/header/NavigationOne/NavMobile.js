import React from 'react';
import { Link } from 'react-router-dom'

/** Tablet and Mobile */

function NavMobile(props) {
  return (
    <div style={{
      /** some reason transition duration not working  */
      position: "relative",
      transitionProperty: "top",
      transitionDuration: "2s",
      top: props.view ? 0 : -200,
      background: "#eee"
    }}>
      <div className={`nav ${props.view && props.windowSizeSmall ? 'flex-column' : 'd-none'}`}>
        {
          props.data.map(item => {
            return <div className="nav-item" key={item.id}>
              <Link className="nav-link" eventKey={item.link}>{item.name}</Link>
            </div>
          })
        }
      </div>
    </div>
  )
}

export default NavMobile

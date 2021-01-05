import React from 'react'
import { Link } from 'react-router-dom';


function NavDesktop(props) {
  return (
    <div>
      <div
        className={`${props.windowSizeSmall ? 'd-none' : ''} nav d-flex justify-content-center`}>
        {
          props.data.map(item => {
            return <div className="nav-item" key={item.id}>
              <Link
                to={`/${item.link}`}
                className="nav-link"
              >{item.name}</Link>
            </div>
          })
        }
      </div>
    </div>
  )
}

export default NavDesktop

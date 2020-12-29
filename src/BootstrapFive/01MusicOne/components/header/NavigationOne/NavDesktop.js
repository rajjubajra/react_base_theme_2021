import React from 'react'
import { Link } from 'react-router-dom';


const ulStyle = {
  listStyle: "none",
  display: "flex",
  height: "40px",
  alignItems: "center"
}

function NavDesktop(props) {
  return (
    <div>
      <ul
        style={ulStyle}
        className={`${props.windowSizeSmall ? 'd-none' : ''}`}>
        {
          props.dataLength > 0 &&
          props.data.map(item => {
            const { id, path, name } = item
            return <li key={id}>
              <Link
                style={props.linkStyle}
                to={`/${path}`}
              >{name}</Link>
            </li>
          })
        }
      </ul>
    </div>

  )
}

export default NavDesktop

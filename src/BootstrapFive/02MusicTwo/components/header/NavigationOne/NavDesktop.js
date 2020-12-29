import React from 'react'
import { Link } from 'react-router-dom';
import NavigationOne from './NavigationOne';


const ulStyle = {
  listStyle: "none",
  display: "flex",
  height: "40px",
  alignItems: "center"
}
const titleStyle = {
  display: "flex",
  height: "40px",
  alignItems: "center",
  margin: "5px 10px"
}

function NavDesktop(props) {
  return (
    <>
      <div
        style={titleStyle}
        className={`${props.windowSizeSmall ? 'd-none' : ''}`}>
        <h5>YW Music Two</h5>
      </div>
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
    </>

  )
}

export default NavDesktop

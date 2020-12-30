import React from 'react'
import { Link } from 'react-router-dom';
import SearchIcon from '../../Icon/SearchIcon';
import { pagelink } from '../../../PageLink';

const ulStyle = {
  listStyle: "none",
  display: "flex",
  height: "61px",
  margin: "5px 25px",
  alignItems: "center"
}

const titleStyle = {
  display: "flex",
  height: "61px",
  alignItems: "center",
  margin: "5px 25px",
}


function NavDesktop(props) {
  return (
    <div className="d-flex justify-content-between w-100">

      <div style={titleStyle}>
        <h1>YW Blog Four</h1>
        <div className="ml-2">
          <Link to={`/${pagelink.search}`}>
            <SearchIcon />
          </Link>
        </div>
      </div>

      <div>
        <ul style={ulStyle}>
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

    </div>
  )
}

export default NavDesktop
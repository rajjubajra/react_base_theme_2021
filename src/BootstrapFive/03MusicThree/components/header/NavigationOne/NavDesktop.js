import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';



function NavDesktop(props) {

  /** colour variant */
  const variant = useSelector(state => state.reducerSelectColourMode.variant);


  const ulStyle = {
    listStyle: "none",
    display: "flex",
    height: "40px",
    alignItems: "center"
  }

  const liStyle = {
    color: variant === 'dark' ? '#ddd' : '',
  }

  return (
    <div className="w-100 d-flex justify-content-between mr-5">
      <ul style={ulStyle}
        className={`${props.windowSizeSmall ? 'd-none' : ''}`}>
        <li style={liStyle}>Music Logo</li>
      </ul>
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

import React from 'react'
import { Link } from 'react-router-dom';
import SocialMediaDesktop from '../../socalMedia/SocialMediaDesktop';



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
    <>
      <div className="d-flex justify-content-end w-100">
        <SocialMediaDesktop />
      </div>
      <div className="d-flex justify-content-between w-100">

        <div style={titleStyle}>
          <h1>YW Blog Two</h1>
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
    </>
  )
}

export default NavDesktop
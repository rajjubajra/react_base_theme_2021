import React from 'react'
//import { Link } from 'react-router-dom';


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


function NavTablet(props) {
  return (
    <div className="d-flex justify-content-between w-100">

      <div style={titleStyle}>
        <h1>YW Business Two</h1>
      </div>

      <div>
        <ul style={ulStyle}>
          {
            props.dataLength > 0 &&
            props.data.map(item => {
              const { id, path, name } = item
              return <li key={id}>
                <a
                  style={props.linkStyle}
                  href={`/${path}`}
                >{name}</a>
              </li>
            })
          }
        </ul>
      </div>

    </div>
  )
}

export default NavTablet
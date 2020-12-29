import React from 'react'
import { Link } from 'react-router-dom';
import SocialMedia from '../../socalMedia/SocialMedia';


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

const socialMediaStyle = {
  lineHeight: "4.5rem",
  marginRight: "20px"
}


function NavDesktop(props) {
  return (
    <div className="d-flex justify-content-between w-100">

      <div style={titleStyle}>
        <h1>
          <img style={{
            width: "50%",
            maxWidth: "50px",
            marginRight: "15px"
          }} src={props.ywLogo} alt="yellow-webiste" />
        Business One</h1>
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

      <div style={socialMediaStyle}>
        <SocialMedia />
      </div>

    </div>
  )
}

export default NavDesktop
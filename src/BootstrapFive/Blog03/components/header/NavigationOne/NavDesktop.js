import React from 'react'
import { Link } from 'react-router-dom';
import SocialMediaDesktop from '../../../components/socalMedia/SocialMediaDesktop';
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

  const iconStyle = {
    width: "20px",
    height: "20px",
    margin: "25px 10px",
    display: props.hideLink ? "none" : "absolute",
    top: "0px"
  }


  return (
    <div className="d-flex justify-content-between w-100">

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

      <div style={titleStyle}>
        <h1>YW Blog Three</h1>
        {/** Navigate to Search Page */}
        {
          props.hidSearchIcon
            ? ''
            : <Link to={`/${pagelink.search}`}>
              <img style={iconStyle} src={props.searchIcon} alt="search" />
            </Link>
        }
      </div>

      <div>
        <SocialMediaDesktop />
      </div>



    </div>
  )
}

export default NavDesktop
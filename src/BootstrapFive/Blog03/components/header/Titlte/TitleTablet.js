import React from 'react'
import { pagelink } from '../../../PageLink';
import { Link } from 'react-router-dom'


function TitleTablet(props) {
  const iconStyle = {
    width: "20px",
    height: "20px",
    margin: "20px 8px",
    display: props.hideLink ? "none" : "absolute",
    top: "0px"
  }



  return (
    <div style={props.mainDivStyle} className="d-flex justify-content-center">
      {/** TITLE  */}
      <h1 className="display-2">{props.title}</h1>

      {/** Navigate to Search Page */}
      <Link to={`/${pagelink.search}`}>
        <img style={iconStyle} src={props.searchIcon} alt="search" />
      </Link>
    </div>
  )
}

export default TitleTablet

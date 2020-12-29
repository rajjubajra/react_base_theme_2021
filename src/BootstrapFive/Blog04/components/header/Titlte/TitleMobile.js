import React from 'react'
import { pagelink } from '../../../PageLink';
import { Link } from 'react-router-dom'
import SearchIcon from '../../Icon/SearchIcon';

function TitleMobile(props) {



  return (
    <div style={props.mainDivStyle} className="d-flex justify-content-center">
      {/** TITLE  */}
      <h1 className="title">{props.title}</h1>

      {/** Navigate to Search Page */}
      <Link to={`/${pagelink.search}`}>
        <SearchIcon />
      </Link>
    </div>
  )
}

export default TitleMobile

import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function FooterNav() {
  /** get data from reducer */
  const data = useSelector(state => state.reducerFetchMenu.data);
  const dataLength = useSelector(state => state.reducerFetchMenu.dataLength);
  //const linkPrefix = useSelector(state => state.reducerFetchMenu.linkPrefix);


  const linkStyle = {
    fontSize: "clamp(0.7rem, 5vw, 0.8rem)",
    color: "#000",
    letterSpace: "0.15rem",
    fontWeight: "300",
    textTransform: "uppercase",
    margin: "0px 10px",
    textDecoration: "none",
    listStyle: "none"
  }

  const ulStyle = {
    listStyle: "none",
    display: "flex",
    height: "61px",
    margin: "5px 25px",
    alignItems: "center"
  }


  return (
    <ul style={ulStyle}>
      {
        dataLength > 0 &&
        data.map(item => {
          const { id, path, name } = item
          return <li key={id}>
            <Link
              style={linkStyle}
              to={`/${path}`}
            >{name}</Link>
          </li>
        })
      }
    </ul>
  )
}

export default FooterNav

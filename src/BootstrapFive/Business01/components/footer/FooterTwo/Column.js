import React from 'react';
import { Link } from 'react-router-dom';


const ulStyle = {
  listStyle: "none",
  fontWeight: "100",
  fontSize: "0.9rem",
  lineHeight: "1.5rem",
  paddingInlineStart: "0px",
}

function Column(props) {
  return (
    <ul style={ulStyle}>
      {
        props.data.map(item => {
          return <li key={item.id}><Link to={item.nav}>{item.name}</Link></li>
        })
      }
    </ul>
  )
}

export default Column

import React from 'react'


function TitleTablet(props) {



  return (
    <div style={props.mainDivStyle} className="d-flex justify-content-center">
      {/** TITLE  */}
      <h1 className="title display-2">{props.title}</h1>
    </div>
  )
}

export default TitleTablet

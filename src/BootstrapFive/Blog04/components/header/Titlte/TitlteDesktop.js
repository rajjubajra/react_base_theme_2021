import React from 'react'


function TitlteDesktop(props) {


  return (
    <div style={props.mainDivStyle} className="d-flex justify-content-center">
      {/** TITLE  */}
      <h1 className="title display-1">{props.title}</h1>
    </div>
  )
}

export default TitlteDesktop

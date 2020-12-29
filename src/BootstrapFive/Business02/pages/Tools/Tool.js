import React from 'react';


function Tool(props) {

  return (
    <div className="card m-2 p-2 text-white" style={{ justifyContent: "center" }}>

      {/* <img className="card-image"
        src={props.logo}
        style={{ width: '200px', minHieght: "206px" }}
        alt="Card" /> */}
      <div><h3>{props.logo}</h3></div>

      <div className="card-img-overlay" >
        <h5 className="card-title">Card title</h5>
        <p className="card-text">{props.text}</p>
      </div>

    </div>
  )
}

export default Tool

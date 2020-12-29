import React from 'react'




function Card(props) {

  const styleCard = {
    width: "18rem",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    minWidth: 0,
    wordWrap: "break-word",
    backgroundClip: "border-box",
  }
  return (
    <div style={styleCard}>
      <div className="card-body">
        <h5 className="card-title mb-4">{props.title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{props.subTitle}</h6>
        <p className="card-text">{props.text}</p>
      </div>
    </div>
  )
}

export default Card

import React from 'react';
import Card from './Card';

function Team() {

  const title = "Team member name"
  const text = "Position"

  return (
    <div className="container mt-5">

      {/** TITLE */}
      <div className="row justify-content-center">
        <div className="col-lg-10 col-md-12 col-sm-10">
          <h1>Team:</h1>
        </div>
      </div>

      {/**BODY */}
      <div className="row justify-content-center">
        <div className="col-lg-10 col-md-12 col-sm-10">

          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-6">
              <Card title={title} text={text} />
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6">
              <Card title={title} text={text} />
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6">
              <Card title={title} text={text} />
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6">
              <Card title={title} text={text} />
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6">
              <Card title={title} text={text} />
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6">
              <Card title={title} text={text} />
            </div>

          </div>
        </div>
      </div>


    </div>
  )
}

export default Team

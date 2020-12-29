import React from 'react';
import './Clients.scss';


function Clients() {
  return (
    <div className="py-5 clients">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-3 col-sm-6 my-3">
            <div className="client-card">
              <a href="#!">CLIENT - 1</a>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 my-3">
            <div className="client-card">
              <a href="#!">CLIENT - 2</a>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 my-3">
            <div className="client-card">
              <a href="#!">CLIENT - 3</a>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 my-3">
            <div className="client-card">
              <a href="#!">CLIENT - 4</a>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Clients

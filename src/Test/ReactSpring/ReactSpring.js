import React from 'react';
import Spring from './Spring';
import Springs from './Springs';
import Trail from './Trail';
import Transition from './Transition';
import Chain from './Chain';

function ReactSpring() {


  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div class="card">
            <div class="card-body">
              <Spring />
            </div>
          </div>
        </div>
        <div className="col">
          <div class="card">
            <div class="card-body">
              <Springs />
            </div>
          </div>
        </div>
        <div className="col">
          <div class="card">
            <div class="card-body">
              <Trail />
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <div class="card">
            <div class="card-body">
              <Transition />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReactSpring
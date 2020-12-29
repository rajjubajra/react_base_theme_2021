import React from 'react'

import { Container, Row, Col } from 'react-bootstrap';

import PhotoBox from './PhotoBox';


export const BoxThree = () => {
  return (
    <div style={{ width: "100%", minHeight: "100vh" }}>


      <div className="container mb-5">
        <div className="row">
          <div className="col">
            <p className="small-font">[ Box - 3 ]</p>
          </div>
        </div>
        <div className="row">
          <Col className="d-flex f-wrap" style={{ flexWrap: "wrap" }}>
            <PhotoBox />
            <PhotoBox />
            <PhotoBox />
            <PhotoBox />
            <PhotoBox />
            <PhotoBox />
          </Col>
        </div>
      </div>
    </div>
  )
}

export default BoxThree;

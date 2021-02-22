import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function CardnImage() {

  const Card = styled.div`
  div{
    font-weight: 100;
    letter-spacing: 1px;
  }
  h5{
    font-weight: 300;
    letter-spacing: 2px;
  }
  a{
    display: inline-block;
    font-weight: 100;
    line-height: 1.5;
    color: #212529;
    text-align: center;
    text-decoration: none;
    vertical-align: middle;
    cursor: pointer;
    -webkit-user-select: none;
    user-select: none;
    background-color: transparent;
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    border-radius: 0rem;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    background-color: #cccccc;
    :hover{
      background-color: #999999;
      border-color: #666666;
      color: #000000;
      transition: background-color  border-color 2s linear;
      
    }
  }
  `

  return (
    <Card>
      <div className="card" style={{ width: "18rem" }}>
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <Link to="#" className="btn btn-primary">Go somewhere</Link>
        </div>
      </div>
    </Card>
  )
}

export default CardnImage

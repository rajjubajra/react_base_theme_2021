import React from 'react';
import styled from 'styled-components';

function BtnReadMore() {

  const Button = styled.button`
    background-color: #dddddd;
    color: #555555;
    padding: 8px 20px;
    border: 1px solid #555555;
    font-weight: 100;
    letter-spacing: 1px;
    outline: none !important;
    :hover{
      background-color: #999999;
      color: #000000;
      transition: background-color 0.7s linear;
    }
  `;

  return (
    <>
      <Button>Read More</Button>
    </>
  )
}

export default BtnReadMore

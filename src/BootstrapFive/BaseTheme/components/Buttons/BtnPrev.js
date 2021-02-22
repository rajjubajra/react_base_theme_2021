import React from 'react';
import styled from 'styled-components';

function BtnPrev() {

  const Prev = styled.div`
  border: 2px solid;
  border-right-color: #dddddd;
  border-top-color: #666666;
  border-bottom-color: #666666;
  border-left-color: #dddddd;
  width: 30px;
  height:30px;
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  :hover{
    transition: border 1s linear;
    border-right-color: #666666;
    border-top-color: #dddddd;
    border-bottom-color: #dddddd;
    border-left-color: #666666;
  }
  `;

  return (
    <Prev>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
      </svg>
    </Prev>
  )
}

export default BtnPrev

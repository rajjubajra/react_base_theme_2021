import React from 'react'
import styled from 'styled-components';



function Submit() {

  const DivSubmit = styled.div`

      button{
        padding: 5px 25px;
        border: 1px solid #999999;
        font-weight: 100;
        letter-spacing: 1px;
        outline: none !important;
        :hover{
          background-color: #999999;
          color: #000000;
          transition: background-color 0.7s linear;
        }
      }
    
  `;

  return (
    <DivSubmit>
      <button type="submit" >Submit</button>
    </DivSubmit>
  )
}

export default Submit

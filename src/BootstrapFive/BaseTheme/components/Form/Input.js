import React from 'react';
import styled from 'styled-components';

function Input(props) {


  const { value, name, placeholder } = props;


  const DivInput = styled.div`
  display: flex;
  flex-direction: column;
  
  input{
    padding: 3px 5px;
    border-radius: 0px;
    border: 1px solid #dddddd;
    width: 100%;
    max-width: 400px; 
    outline: none;

    ::placeholder{
      font-weight: 100;
      letter-spacing: 1px;
    }

  }

  span{
      font-weight: 100;
      font-size: 0.8rem;
      letter-spacing: 1px;
      color: #ff0000;
    }
  `

  return (
    <DivInput>
      <input type="input" onChange={value} name={name} placeholder={placeholder} />
      <span>Required field</span>
    </DivInput>

  )
}

export default Input
import React from 'react';
import styled from 'styled-components';

function TextArea(props) {
  const { name, placeholder } = props;

  const DivTextArea = styled.div`
  textarea{
    width: 100%;
    max-width: 400px;
    min-height: 200px;
    border: 1px solid #dddddd;
    margin: 5px 0px;
    padding: 3px 5px;
    outline: none;
    ::placeholder{
      font-weight: 100;
      letter-spacing: 1px;
    }
  }
`

  return (
    <DivTextArea>
      <textarea rows="2" name={name} placeholder={placeholder}></textarea>
    </DivTextArea>
  )
}

export default TextArea

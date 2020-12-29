import React from 'react';
import styled from 'styled-components';


const TitleBlock = styled.div`

  div{
    transform: rotate(-90deg);
  }
  h1,h4{
  letter-spacing: 0.60rem;
  }

`;


function Title() {
  return (
    <>
      {/** DESKTOP */}
      <TitleBlock>
        <div style={{ width: "145px" }}>
          <h1>YW4</h1>
          <h1>Music</h1>
          <h4>THREE</h4>
        </div>
      </TitleBlock>
    </>
  )
}

export default Title

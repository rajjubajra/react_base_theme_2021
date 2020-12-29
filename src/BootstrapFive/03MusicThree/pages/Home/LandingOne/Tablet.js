import React from 'react';
import Title from './Title';
import Text from './Text';
import Image from './Image';
import styled from 'styled-components';

const TitlePosition = styled.div`
  position: absolute;
  top: 36%;
  left: 7%;
  letter-spacing: 2rem;
  text-transform: uppercase;
`


function Tablet() {

  return (
    <div className="container-fluid mt-5">
      <div className="row">
        <div className="col-md-3">
          <TitlePosition>
            <Title />
          </TitlePosition>
        </div>
        <div className="col-md-9">
          <Image />
        </div>
        <div className="col-md-9 mt-5">
          <Text />
        </div>
        <div className="col-md-2"></div>
      </div>
    </div>
  )
}

export default Tablet

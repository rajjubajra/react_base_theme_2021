import React from 'react';
import Title from './Title';
import Text from './Text';
import Image from './Image';
import styled from 'styled-components';


const TitlePosition = styled.div`
  position: absolute;
  bottom: 25%;
  left: 7%;
  letter-spacing: 2rem;
  text-transform: uppercase;
`




function Desktop() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-2">
          <TitlePosition>
            <Title />
          </TitlePosition>
        </div>
        <div className="col-lg-3">
          <Text />
        </div>
        <div className="col-lg-7">
          <Image />
        </div>
      </div>
    </div>
  )
}

export default Desktop

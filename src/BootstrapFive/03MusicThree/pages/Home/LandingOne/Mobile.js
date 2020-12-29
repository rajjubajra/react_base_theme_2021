import React from 'react';
import Title from './Title';
import Text from './Text';
import Image from './Image';
import styled from 'styled-components';


const TitlePosition = styled.div`
  position: relative;
  top: -25%;

`

function Mobile() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12">
          <TitlePosition>
            <Title />
          </TitlePosition>
        </div>
        <div className="col-sm-12 mt-3">
          <Image />
        </div>
        <div className="col-sm-12 mt-5">
          <Text />
        </div>
      </div>
    </div>
  )
}

export default Mobile

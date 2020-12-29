import React from 'react';
import MoreButton from './MoreButton';
import styled from 'styled-components';




const TextBlock = styled.div`
  padding: 0px 25px;
  font-weight: 200;
  letter-spacing: 0.1rem;
`;



function Text() {

  return (
    <>
      <TextBlock>
        <h3>Lorem Ipsum Text</h3>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita.</p>
        <span className="d-flex justify-content-end">
          <MoreButton text="More" />
        </span>
      </TextBlock>

    </>
  )
}

export default Text

import React from 'react';
import styled from 'styled-components';


const Block = styled.div`
  font-weight: 100;
  letter-spacing: 1px;
  font-size: 0.9rem;
  i{
    cursor: pointer;
  }
  `


function Copyright() {

  const date = new Date();
  return (
    <div className="container">
      <div className="row justify-content-center pt-2">
        <Block>
          <p>All right reserved &copy; {date.getFullYear()}.
            Design and developed by RD Bajra @
            <i onClick={() => window.open('https://yellow-website.com')} >
              Yellow-Website.com</i>
          </p>
        </Block>
      </div>
    </div>
  )
}

export default Copyright

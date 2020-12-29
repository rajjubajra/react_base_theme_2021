import React from 'react'
import styled from 'styled-components';

function Image() {

  const imageUrl = 'https://yellow-website.com/d8-react-base-theme-backend/sites/default/files/photo_placeholder/Music2011_1.JPG';

  const Image = styled.div`

  img{
    width: 94%;
    margin-top: 0%;
    margin-right: 5px;
  }
  
  
  `;

  const imageAlt = 'Main';


  return (
    <>
      <Image>
        <img src={imageUrl} alt={imageAlt} />
      </Image>
    </>
  )
}
export default Image
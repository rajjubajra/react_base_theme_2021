import React from 'react'
import PhotoBox from './PhotoBox';
import PhotoMusic from '../../../components/PhotoPlaceholder/PhotoMusic';
import styled from 'styled-components';




const Gallery = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
grid-column-gap: 2px;
grid-row-gap:2px;
`;


function Tablet(props) {


  const { title } = props;

  return (
    <div className="container">
      <div className="row">
        <h1>{title}</h1>
      </div>
      <div className="row">

        <PhotoMusic
          className="d-block w-100"
          width="95%"
          height="300px"
        />

      </div>
      <div className="row">
        <Gallery>
          <div><PhotoBox width="300px" height="300px" /></div>
          <div><PhotoBox width="300px" height="300px" /></div>
          <div><PhotoBox width="300px" height="300px" /></div>
          <div><PhotoBox width="300px" height="300px" /></div>
          <div><PhotoBox width="300px" height="300px" /></div>
          <div><PhotoBox width="300px" height="300px" /></div>
        </Gallery>
      </div>
    </div>
  )
}

export default Tablet

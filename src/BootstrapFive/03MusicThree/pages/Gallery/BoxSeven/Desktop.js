import React from 'react'
import styled from 'styled-components';
import PhotoBox from './PhotoBox';
import PhotoMusic from '../../../components/PhotoPlaceholder/PhotoMusic';




const Gallery = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
grid-column-gap: 2px;
grid-row-gap:2px;
`;


function Desktop(props) {

  const { title } = props;



  return (
    <div className="container">
      <div className="row">
        <h1 style={{ marginLeft: "7px" }}>{title}</h1>
      </div>
      <div className="row">
        <div className="col-lg-3">
          <PhotoMusic
            className="d-block w-100"
            width="250px"
            height="531px"
          />
        </div>
        <div className="col-lg-9">
          <Gallery>
            <PhotoBox width="260px" height="260px" />
            <PhotoBox width="260px" height="260px" />
            <PhotoBox width="260px" height="260px" />
            <PhotoBox width="260px" height="260px" />
            <PhotoBox width="260px" height="260px" />
            <PhotoBox width="260px" height="260px" />
            <PhotoBox width="260px" height="260px" />
            <PhotoBox width="260px" height="260px" />
            <PhotoBox width="260px" height="260px" />
          </Gallery>

        </div>
      </div>
    </div>
  )
}

export default Desktop

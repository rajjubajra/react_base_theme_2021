import React from 'react'
import ImageHolder from './ImageHolder';
import { Link } from 'react-router-dom';
import { pagelink } from '../../../PageLink';
import styled from 'styled-components';



const Gallery = styled.div`
 display: grid;
   grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  grid-column-gap: 2px;
  grid-row-gap:2px;

`;


function Tablet(props) {

  const longPhotoStyle = {
    margin: "7px",
    marginLeft: "32px"
  }

  const imageStyle = {
    width: "95.6%",
    height: "250px",
    objectFit: "cover",
    border: "1px solid #000",
    outlineOffset: "-10px",
    outline: "1px solid rgba(255,255,255,0.25)",
    filter: "grayscale(1)",
  }

  const { dtLength, data, title } = props;

  return (
    <>

      <div className="container">
        <div className="row justify-content-center">
          <div style={longPhotoStyle}>
            <h1>{title}</h1>
            {
              dtLength > 0 && <img
                style={imageStyle}
                src={data[0].image.url} alt={data[0].title} />
            }
          </div>
        </div>
        <div className="row d-flex justify-content-center flex-wrap">
          <Gallery>
            {
              dtLength > 0 &&
              data.map(item => {
                return <Link key={item.nid} to={`/${pagelink.playList}/${item.nid}`}>
                  <ImageHolder
                    width="260px"
                    height="260px"
                    img={item.image.url}
                    alt={item.image.alt}
                  />
                </Link>
              })
            }
          </Gallery>
        </div>
      </div>

    </>
  )
}

export default Tablet

import React from 'react'
import ImageHolder from './ImageHolder';
import { Link } from 'react-router-dom';
import { pagelink } from '../../../PageLink';


// import PhotoBox from './PhotoBox';
// import PhotoMusic from '../../../components/PhotoPlaceholder/PhotoMusic';

function Mobile(props) {

  const longPhotoStyle = {
    margin: "6px",
  }

  const imageStyle = {
    width: "92.1%",
    height: "200px",
    objectFit: "cover",
    border: "1px solid #000",
    outlineOffset: "-10px",
    outline: "1px solid rgba(255,255,255,0.25)",
    filter: "grayscale(1)",
  }

  const { dtLength, data, title } = props;

  return (
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
      <div className="row d-flex flex-wrap justify-content-center">
        {
          dtLength > 0 &&
          data.map(item => {
            return <Link key={item.nid} to={`/${pagelink.playList}/${item.nid}`}>
              <ImageHolder
                width="90%"
                height="330px"
                img={item.image.url}
                alt={item.image.alt}
              />
            </Link>
          })
        }

      </div>
    </div>
  )
}

export default Mobile

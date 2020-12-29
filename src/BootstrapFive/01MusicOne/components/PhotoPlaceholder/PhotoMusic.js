import React, { useEffect, useState } from 'react';
import { photoUrl } from './PhotoUrl'
import axios from 'axios';
import CustomPlaceholder from './CustomPlaceholder';


function PhotoMusic(props) {

  const [photo, setPhoto] = useState([]);
  const [indexId, setIndexId] = useState(0);

  const tagId = 17; //Taxonomy target_id for "Music"
  const dataUrl = `${photoUrl.URL}/${tagId}`;


  const [mouseIn, setMouseIn] = useState(false);
  console.log("Mouse IN", mouseIn);

  useEffect(() => {

    axios({
      method: 'GET',
      url: dataUrl,
      headers: {
        'Accept': 'application/vnd.api+json'
      }
    })
      .then(res => {
        console.log("PHOTO DATA :::", res.data);
        setPhoto(res.data);
      })
      .catch(err => console.log(err))
  }, [dataUrl])

  function getRandomArbitrary(min, max) {
    let randomIndex = Math.floor(Math.random() * ((max - 1) - min) + min);
    console.log("RANDOM INDEX", randomIndex);
    return randomIndex;
  }

  useEffect(() => {
    /** if the "photo" state has data,
     *  generate random Index id,
     *  in order to populate in to img tag */
    if (photo.length > 0) {
      setIndexId(getRandomArbitrary(0, photo.length))
    }
  }, [photo.length])

  // console.log("Photo Travel", photo, 'Length', photo.length, 'index Id', indexId);

  const imgStyle = {
    width: props.width,
    height: props.height,
    objectFit: "cover",
    border: "1px solid #000",
    outlineOffset: "-10px",
    outline: "1px solid rgba(255,255,255,0.25)",
    filter: "grayscale(1)",
  }
  console.log("PHOTO INDEX", photo.length > 0 ? photo[indexId].url : photo);

  return (
    <div>
      { /** if Photo has data populate Img Tag else View Custom blank placeholder */

        photo.length > 0
          // eslint-disable-next-line jsx-a11y/img-redundant-alt
          ? <img
            onMouseOver={() => setMouseIn(true)}
            onMouseLeave={() => setMouseIn(false)}
            style={imgStyle}
            src={photo[indexId].url}
            alt="travel photo placeholder" />
          : <CustomPlaceholder width={props.width} height={props.height} />
      }
    </div>
  )

}
export default PhotoMusic
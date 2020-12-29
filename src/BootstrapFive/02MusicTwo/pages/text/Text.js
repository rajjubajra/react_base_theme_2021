import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import EmailNTel from '../address/EmailNTel';
import Pagination from './Pagination';



const bigFont = {
  fontSize: "2rem"
}

function Text() {

  /** Paragrap Image, Title and Text */
  const [paraTitle, setParaTitle] = useState('');
  const [paraG, setParaG] = useState('');
  const [paraImage, setParaImage] = useState('');

  /** Next Album onClick */
  //const [albumLength, setAlbumLength] = useState(0);
  //const [currentAlbum, setCuttentAlbum] = useState(0);


  /** data from Reducer */
  const fetched = useSelector(state => state.reducerFetchData.fetched);
  const textData = useSelector(state => state.reducerFetchData.data);

  /** PAGINATION */
  const page = useSelector(state => state.reducerPagination.page);




  useEffect(() => {
    if (fetched) {
      /** Set Image, Title and Text */
      setParaG(textData[page].body[0].value);
      setParaTitle(textData[page].title[0].value);
      setParaImage(textData[page].field_image_medium[0].url)
      /** set Album length */
      // setAlbumLength(textData.length);
    }
  }, [fetched, page, textData])

  console.log("current album");

  /** react html reader */
  function createParagraph() {
    return { __html: paraG };
  }



  return (
    <div className="container music-two mt-5">
      <div className="row d-flex justify-content-center">
        <div className="col-lg-6 col-11" style={bigFont}>
          <h1>{paraTitle}</h1>
          <div dangerouslySetInnerHTML={createParagraph()} />
        </div>
        <div className="col-lg-6 col-sm-10 col-10">
          <img style={{ width: "100%" }} src={paraImage} alt="album cover" />
        </div>
      </div>
      <div className="row d-flex justify-content-center">
        <div className="col mt-5">
          <Pagination />
        </div>
      </div>

      <div>
        <EmailNTel />
      </div>
    </div>
  )
}

export default Text

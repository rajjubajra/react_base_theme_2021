import React from 'react';
import { useSelector } from 'react-redux';



function Tablet(props) {

  /** Cover Image OF SELECTED ALBUM  */
  const coverImage = useSelector(state => state.ReducerMusicThreePlayList.image);
  const title = useSelector(state => state.ReducerMusicThreePlayList.title);



  const longPhotoStyle = {
    margin: "7px 0px",
  }

  const imageStyle = {
    width: "100%",
    height: "250px",
    objectFit: "cover",
    border: "1px solid #000",
    outlineOffset: "-10px",
    outline: "1px solid rgba(255,255,255,0.25)",
    filter: "grayscale(1)",
  }



  return (
    <>
      {/** LEFT COLUMN IMAGE ONLY */}
      <div style={longPhotoStyle} >
        <img
          style={imageStyle}
          src={coverImage} alt={title[0].value} />
      </div>
    </>
  )
}

export default Tablet

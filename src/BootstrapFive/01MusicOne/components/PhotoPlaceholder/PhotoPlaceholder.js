import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionFetchPhoto } from '../../redux/actions/ActionFetchPhoto';
import CustomPlaceholder from './CustomPlaceholder';



function PhotoPlaceholder(props) {

  const dispach = useDispatch();

  const photo = useSelector(state => state.reducerFetchPhoto.photo);
  const dataLength = useSelector(state => state.reducerFetchPhoto.dataLength);


  useEffect(() => {
    dispach(actionFetchPhoto())
  }, [dispach])


  //console.log("placeholder", photo, "length", dataLength);

  const imgStyle = {
    width: props.width,
    height: props.height,
    objectFit: "cover",
    margin: "10px 0px"
  }

  function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }


  return (
    <div>
      {
        dataLength > 0
          // eslint-disable-next-line jsx-a11y/img-redundant-alt
          ? <img
            className="d-block w-100"
            style={imgStyle}
            src={photo[getRandomArbitrary(0, (dataLength - 1))].url}
            alt="photo placeholder" />
          : <CustomPlaceholder width={props.width} height={props.height} />
      }
    </div>
  );

}

export default PhotoPlaceholder
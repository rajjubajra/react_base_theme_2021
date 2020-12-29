import React from 'react'
import './Carousel.scss';



function CarouselItem(props) {

  function giveClassName(slideId, id, dataLength) {

    if ((slideId - 1) === id) {
      return 'slide-left';
    } else if (slideId === id) {
      return 'slide-middle';
    } else if ((slideId + 1) === id) {
      return 'slide-right';
    } else if (slideId === 1) {
      return 'slide-middle'
    }
    else {
      return '';
    }
  }

  return (
    <div className={`
    set-position
    ${giveClassName(props.slide, props.id)}
    `} >
      <div className="media">
        <img
          style={{
            maxWidth: '100px',
            display: "flex",
            justifySelf: 'center',
            alignSelf: 'center'
          }}
          src={props.img}
          alt={props.alt}
        />
        <div className="media-body">
          <h5>{props.clientName}</h5>
          <p>{props.reviewText} [ {props.slide} | {props.id} ]</p>
        </div>
      </div>
    </div>


  )
}

export default CarouselItem

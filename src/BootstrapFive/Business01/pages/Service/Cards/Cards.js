import React from 'react'
import Card from './Card'

function Cards(props) {


  const title = "Services"
  // const subTitle = "Sub Title"
  const text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente non sed fugit voluptas tempora molestias, earum magnam. Quibusdam ab doloremque sed, necessitatibus quas, ipsa dolorem magni excepturi cupiditate aperiam iste";


  return (
    <div className="container">

      <div className={`row justify-content-center ${props.hide && 'd-none'}`}>
        <h2>Services</h2>
      </div>

      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-11 d-flex justify-content-center mb-4">
          <Card
            title={title}
            text={text}
          />
        </div>
        <div className="col-lg-4 col-md-6 col-sm-11  d-flex justify-content-center mb-4">
          <Card
            title={title}
            text={text}
          />
        </div>
        <div className="col-lg-4 col-md-6 col-sm-11  d-flex justify-content-center mb-4">
          <Card
            title={title}
            text={text}
          />
        </div>
        <div className="col-lg-4 col-md-6 col-sm-11  d-flex justify-content-center mb-4">
          <Card
            title={title}
            text={text}
          />
        </div>
        <div className="col-lg-4 col-md-6 col-sm-11  d-flex justify-content-center mb-4">
          <Card
            title={title}
            text={text}
          />
        </div>
        <div className="col-lg-4 col-md-6 col-sm-11  d-flex justify-content-center mb-4">
          <Card
            title={title}
            text={text}
          />
        </div>
      </div>
    </div>
  )
}

export default Cards

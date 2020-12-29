import React from 'react'
import Title from '../global/Title';
import Text from '../global/Text';
import Carousel from './Carousel';


function Review() {
  return (
    <div className="container">
      <div className="row">
        <Title title="Client's Review" />
        <Text text='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, deleniti
        recusandae. Esse incidunt rem repellendus ab voluptates maxime? Nemo, numquam!' />
      </div>
      <div>
        <Carousel />
      </div>
    </div>
  )
}

export default Review

import React from 'react'
import Title from '../global/Title';
import Text from '../global/Text';

function ServiceTitle() {
  return (
    <div className="text-center service-title">
      <Title title="Service Offers" />
      <div className="d-flex justify-content-center">
        <Text text="<p>
        There are many variations of passages of Lorem Ipsum available, but the majority have
        suffered alteration in some form, by injected humour
      </p>" />
      </div>

    </div>
  )
}

export default ServiceTitle

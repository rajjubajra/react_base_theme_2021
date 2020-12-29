import React from 'react';
import FormEight from '../../components/FormEight/FormEight';
import Image from '../../components/Image';

function ContactDesktop(props) {
  return (

    <div className="row justify-content-center">

      {/** Image and  Brief text */}
      <div className="col-lg-4 mt-5">
        <Image img={props.image} width="200px" height="350px" />
        <div className="mt-2">
          <h2>General Enquiries</h2>
          <p>Email: info@mymusicexample.com</p>
        </div>
        <div className="mt-5">
          <h2>Booking Agencies</h2>
          <p>America</p>
          <p>Austreial</p>
          <p>Asia</p>
          <p>Europe</p>
          <p>Africa</p>
        </div>
      </div>

      {/** Form */}
      <div className="col-lg-8">
        <FormEight />
      </div>

    </div>

  )
}

export default ContactDesktop

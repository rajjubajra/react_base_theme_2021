import React from 'react';
import FormEight from '../../components/FormEight/FormEight';
import Image from '../../components/Image';

function ContactDesktop(props) {
  return (
    <>

      <div className="row justify-content-center">
        {/** Image and  Brief text */}
        <div className="col-md-4 mt-5">
          <Image img={props.image} width="200px" height="400px" />
        </div>
        {/** Form */}
        <div className="col-md-8">
          <FormEight />
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-md-6">
          <h2>General Enquiries</h2>
          <p>Email: info@mymusicexample.com</p>
        </div>
        <div className="col-md-6">
          <h2>Booking Agencies</h2>
          <p>America</p>
          <p>Austreial</p>
          <p>Asia</p>
          <p>Europe</p>
          <p>Africa</p>
        </div>
      </div>

    </>
  )
}

export default ContactDesktop

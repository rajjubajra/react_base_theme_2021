import React from 'react';
import FormEight from '../../components/FormEight/FormEight';
import Image from '../../components/Image';

function ContactMobile(props) {

  return (
    <>

      <div className="row justify-content-center">
        {/** Image */}
        <div className="col-sm-12 mt-2 mb-4">
          <Image width="100%" height="130px" img={props.image} />
        </div>
      </div>

      <div className="row justify-content-center">
        {/** Form */}
        <div className="col-sm-11">
          <FormEight />
        </div>
      </div>

      <div className="row mt-5 mb-2 justify-content-center">
        <div className="col-2"></div>
        <div className='col-10'>
          <h2>General Enquiries</h2>
          <p>Email: info@mymusicexample.com</p>
        </div>
      </div>
      <div className="row jusify-content-center pb-5">
        <div className="col-2"></div>
        <div className='col-10'>
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

export default ContactMobile

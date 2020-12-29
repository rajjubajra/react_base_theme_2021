import React from 'react';
import FormSix from './FormSix';


function ContactMobile() {

  const styleCenter = {
    minHeight: "70vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  }

  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col-11 d-flex justify-content-end border-right pr-4">
          <h1>Contact</h1>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-11">
          <div style={styleCenter} className="pr-4 pl-4 border-left border-top">
            <section className="first-big-letter mt-3">
              <FormSix />
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactMobile

import React from 'react'
import FormSix from './FormSix';

function ContactDesktop() {


  const styleCenter = {
    minHeight: "70vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  }


  return (

    <div className="container">
      <div className="row mt-5">

        <div className="col-lg-3 col-md-3">
          <div style={styleCenter}>
            <h1>Contact</h1>
          </div>

        </div>

        <div className="col-lg-9 col-md-9">
          <div style={styleCenter} className="pr-4 pl-4 border-left">
            <section className="first-big-letter mt-3">
              <FormSix />
            </section>

          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactDesktop

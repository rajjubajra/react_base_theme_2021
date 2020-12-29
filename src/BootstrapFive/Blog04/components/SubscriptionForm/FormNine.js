import React from 'react';
import { useSelector } from 'react-redux';


function FormNine() {

  /** colour variant */
  const variant = useSelector(state => state.reducerSelectColourMode.variant);
  //console.log("form Nine variant", variant);

  return (
    <div className="container">

      <div className="row justify-content-center">


        {/** DESKTOP */}
        <div className="col-lg-6 d-none d-lg-block d-xl-block">
          <form className="form-inline mt-5 mb-5">
            <input
              style={{ width: "70%" }}
              type="text"
              className="form-control mb-2 mr-sm-2"
              placeholder="Email" />
            <button
              type="submit"
              className={`${variant === 'dark' ? "btn btn-dark" : "btn btn-light"} mb-2 w-100"`}>Subscribe</button>
          </form>
        </div>



        {/** TABLET AND MOBILE */}
        <div className="col-sm-10 col-md-6 d-block d-lg-none d-xl-none">
          <form className="form-inline mt-5 mb-5">
            <input
              style={{ width: "95%" }}
              type="text"
              className="form-control mb-2 mr-sm-2 w-100"
              placeholder="Email" />
            <button
              style={{ width: "95%" }}
              type="submit"
              className={`${variant === 'dark' ? "btn btn-dark" : "btn btn-light"} mb-2 w-100"`}
            >Subscribe</button>
          </form>
        </div>



      </div>
    </div>

  )
}

export default FormNine

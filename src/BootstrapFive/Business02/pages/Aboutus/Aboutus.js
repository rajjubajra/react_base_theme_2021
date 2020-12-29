import React from 'react';
import AboutusContent from './AboutusContent';
import AboutusImage from './AboutusImage';
import { useInView } from 'react-intersection-observer';




function Aboutus() {
  const [ref, inView] = useInView({
    /* Optional options */
    //triggerOnce: true, //trigger animation first time only
    threshold: 0.5,
  })



  // console.log('ref', ref);
  console.log('inview', inView,);
  // console.log('entry', entry);
  return (

    <div className="container-fluid" ref={ref}
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}>
      <div className="row justify-content-center">
        <div className="col-sm-12 col-md-6 col-lg-6" >
          <div className={inView ? 'img-visible' : 'img-invisible'}>
            <AboutusImage />
          </div>
        </div>
        <div className="d-flex justify-content-center col-sm-12 col-md-6 col-lg-6">
          <div className={inView ? 'text-visible' : 'text-invisible'}>
            <AboutusContent />
          </div>
        </div>
      </div>
    </div>


  )
}

export default Aboutus

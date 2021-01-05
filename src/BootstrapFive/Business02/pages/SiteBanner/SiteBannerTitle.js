import React from 'react';




function SiteBannerTitle() {


  return (
    <>
      <h3 className="title-tex" style={{ animation: "fadeIn 2s" }}>
        Hello
      </h3>
      <div style={{
        animation: "fadeInScale 1s linear",
        animationDelay: "1s",
        animationFillMode: "both"
      }}>
        <h1>I am a Plant</h1>
      </div>

      <div style={{
        animation: "fadeInScale 1s linear",
        animationDelay: "1.5s",
        animationFillMode: "both"
      }}>
        <h2>Plant of a house</h2>
      </div>

      <div className="site-buttons">
        <div style={{
          animation: "fadeIn 1s",
          animationFillMode: "both",
          animationDelay: "2s"
        }}
          className="d-flex flex-rw flex-wrap justify-content-center">
          <button className="btn btn-primary me-1" variant="primary">Why me?</button>
          <button className="btn btn-primary ms-1" variant="primary">Get Quote</button>
        </div>
      </div>
    </>
  )
}

export default SiteBannerTitle
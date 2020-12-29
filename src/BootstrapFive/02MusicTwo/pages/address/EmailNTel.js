import React from 'react'



const desktopFont = {
  fontSize: "2rem",
  letterSpacing: "0.2rem",
  listStyle: "none"
}

const mobileFont = {
  fontSize: "1rem",
  letterSpacing: "0.2rem",
  listStyle: "none",
  position: "relative",
  left: "-36px",

}



function EmailNTel() {
  return (

    <div className="container">
      <div className="row">
        <div className="col">
          <div className="card mt-5 mb-5">
            <div className="card-body">
              <div className="card-text">

                {/** DESKTOP AND TABLET */}
                <div className="d-flex justify-content-between">
                  <ul style={desktopFont} className="d-none d-lg-block d-md-block">
                    <li style={{
                      padding: "20px 30px 20px 30px",
                      borderBottom: "1px solid #ccc"
                    }}>YW Music Two</li>
                  </ul>
                  {/** DESKTOP */}
                  <div className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                    <ul style={desktopFont}>
                      <li>email@example.com</li>
                      <li>(444) 5555-5555</li>
                    </ul>
                  </div>
                  {/** MOBILE */}
                  <div className="d-block d-sm-none">
                    <ul style={mobileFont}>
                      <li>email@example.com</li>
                      <li>(444) 5555-5555</li>
                    </ul>
                  </div>

                </div>
              </div>
            </div>
          </div>
          <div className="pb-5"></div>
        </div>
      </div>
    </div>
  )
}
export default EmailNTel
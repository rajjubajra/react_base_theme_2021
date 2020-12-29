import React from 'react';
//import { Link } from 'react-router-dom';

function NavigationTablet(props) {

  /** NAV DATA */
  const { data, title, signature, subTitleFontStyle } = props;

  return (
    <>
      <div className="row justify-content-center">
        <div>
          <h1>{title}</h1>
          <p style={subTitleFontStyle} className="siganture-small">{signature}</p>
        </div>
      </div>
      <div className="row justify-content-between my-2 desktop">

        <div className='col-lg-10'>
          <div className="d-flex justify-content-between w-100">
            {
              data.length > 0
              && data.map((item, index) => {
                return <div key={index}
                  style={{ borderRight: index < 5 && "1px solid #ccc" }}
                  className="link-item">
                  <a href={`/${item.link}`}>{item.name}</a>
                </div>
              })
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default NavigationTablet

import React from 'react';
//import { Link } from 'react-router-dom';

function NavigationDesktop(props) {

  /** NAV DATA */
  const { data, title, signature, subTitleFontStyle } = props;


  return (
    <div className="row justify-content-between my-2 desktop">

      <div className='col-lg-4'>
        <div className="d-flex justify-content-end w-100">
          {/** data is slide in to two part 
          in order to put the logo at the middle */
            data.length > 0
            && data.slice(0, 3).map((item, index) => {
              return <div key={index}
                style={{ borderRight: index < 2 && "1px solid #ccc" }}
                className="link-item">
                <a href={`/${item.link}`}>{item.name}</a>
              </div>
            })
          }
        </div>
      </div>

      <div className="col-lg-4 title d-flex justify-content-center">
        <div>
          <h1>{title}</h1>
          <h3 style={subTitleFontStyle}>{signature}</h3>
        </div>
      </div>

      <div className="col-lg-4">
        <div className="d-flex justify-content-start w-100">
          {
            data.length > 0
            && data.slice(3, 6).map((item, index) => {
              return <div key={index}
                style={{ borderRight: index < 2 && "1px solid #ccc" }}
                className="link-item">
                <a href={`/${item.link}`}>{item.name}</a>
              </div>
            })
          }
        </div>
      </div>

    </div>
  )
}

export default NavigationDesktop

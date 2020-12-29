import React from 'react';
import CardTablet from './CardTablet';
import { pagelink } from '../../../PageLink';
import { Link } from 'react-router-dom';
import IconClose from './IconClose';




function ThemeTablet(props) {

  const { data } = props;


  console.log("scrooll", window.scroll);


  return (
    <div className='gallery min-vh-100'>
      {/** ICON CLOSED BACK TO THEMES PAGE */}
      <div className="w-100 d-flex justify-content-end pr-5 pt-3">
        <Link to={`${pagelink.home}`}><IconClose /></Link>
      </div>

      {/** THEMES LISTINGS */}
      <div className="page-block">
        {
          data.length > 0 &&
          data.map((item, index) => {
            return <div key={index}>

              <CardTablet
                title={item.title}
                linkref={item.linkref}
                text={item.text}
                type={item.type}
                bgImage={item.bgImage}
                features={item.features}
              />

            </div>
          })
        }

      </div>
    </div>
  )
}

export default ThemeTablet;
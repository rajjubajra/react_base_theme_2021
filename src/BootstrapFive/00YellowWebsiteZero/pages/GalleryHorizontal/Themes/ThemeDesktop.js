import React, { useState } from 'react';
import BtnNext from './Btn/BtnNext';
import BtnPrev from './Btn/BtnPrev';
import CardDesktop from './CardDesktop';
import { pagelink } from '../../../PageLink';
import { Link } from 'react-router-dom';
import IconClose from './IconClose';





function ThemeDesktop(props) {

  const { data } = props;

  const [viewCompo, setViewCompo] = useState(0);
  const [direction, setDirection] = useState("next");
  const dataLength = data.length;
  const windowWidth = window.innerWidth;

  console.log("view compo", viewCompo, direction, windowWidth);

  console.log("scrooll", window.scroll);

  const viewHandler = (direction) => {
    direction === 'next'
      ? setViewCompo(viewCompo + 1)
      : setViewCompo(viewCompo - 1);
    setDirection(direction);
  }

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
            return <div key={index}
              className={`${viewCompo === index ? 'view' : index < viewCompo ? 'beLeft' : 'beRight'}`}>

              <CardDesktop
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

        <BtnNext
          viewHandler={viewHandler}
          viewCompo={viewCompo}
          dataLength={dataLength}
        />
        <BtnPrev
          viewHandler={viewHandler}
          viewCompo={viewCompo}
        />
      </div>
    </div>
  )
}

export default ThemeDesktop;

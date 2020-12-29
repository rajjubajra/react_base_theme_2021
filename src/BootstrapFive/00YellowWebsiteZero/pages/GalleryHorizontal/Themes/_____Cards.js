import React from 'react';
import CardDesktop from './CardDesktop';
import CardMobile from './CardMobile';


function Cards(props) {


  return (
    <>
      <div className="d-none d-md-block d-lg-block d-xl-block">
        <CardDesktop
          bgImage={props.bgImage}
          title={props.title}
          text={props.text}
          type={props.type}
          linkref={props.linkref}
          features={props.features}
        />
      </div>
      <div className="d-block d-md-none d-lg-none d-xl-none">
        <CardMobile
          bgImage={props.bgImage}
          title={props.title}
          text={props.text}
          type={props.type}
          linkref={props.linkref}
          features={props.features}
        />
      </div>

    </>
  )
}

export default Cards




import React from 'react'
import NavigationOne from '../../components/header/NavigationOne/NavigationOne';
import { useSelector } from 'react-redux';
import ColourMode from '../../components/ColourMode/ColourMode';
import FooterTwo from '../../components/footer/FooterTwo/FooterTwo';
import HalfImageBlock from './HalfImageBlock';
import Cards from './Cards/Cards';



export const Service = () => {

  const className = useSelector(state => state.reducerSelectColourMode.colourMode);
  //const ColourVariant = useSelector(state => state.reducerSelectColourMode.variant);


  return (
    <div className='business-one'>
      <div className={className}>

        <ColourMode />
        <NavigationOne />


        <div className="container-fluid">

          <div className="row min-vh-100 justify-content-center">

            <HalfImageBlock />


            {/** background image line */}
            <div className="w-100">

              <img
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover"
                }}
                src="https://yellow-website.com/d8-react-base-theme-backend/sites/default/files/photo_placeholder/potery2.jpg" alt="background-borderimage" />

            </div>

            {/** SERVICES BLOCK */}
            <div className="mt-5 mb-5">
              {/** hide props : hide "duplicate service title" */}
              <Cards hide={true} />
            </div>



            {/** FOOTER */}
            {/** 'hide' props set display-none to about content on footer*/}
            <div className="mt-5">
              <FooterTwo />
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Service;

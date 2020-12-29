import React from 'react'
import NavigationOne from '../../components/header/NavigationOne/NavigationOne';
import { useSelector } from 'react-redux';
import ColourMode from '../../components/ColourMode/ColourMode';
import FooterTwo from '../../components/footer/FooterTwo/FooterTwo';
import HalfImageBlock from './HalfImageBlock';
import FormOne from './FormOne/FormOne';



export const Contact = () => {

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

            {/** ABBOUT US TEXT CONTENT */}
            <div className="col-lg-8 col-md-10 col-sm-11 mt-5">
              <FormOne />
            </div>

          </div>




          {/** FOOTER */}
          {/** 'hide' props set display-none to about content on footer*/}
          <div className="row mt-5 justify-content-center">
            <div className="col-lg-8 col-md-10 col-sm-11 mt-5">
              <FooterTwo />
            </div>
          </div>


        </div>
      </div>
    </div>
  )
}

export default Contact;

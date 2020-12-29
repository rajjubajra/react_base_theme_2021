import React from 'react';
import NavigationOne from '../components/header/NavigationOne/NavigationOne';
import { useSelector } from 'react-redux';
import ColourMode from '../components/ColourMode/ColourMode';
import BoxTen from './BoxTen/BoxTen';
import Cards from './Service/Cards/Cards';
import WideImage from './WideImage/WideImage';
import FooterTwo from '../components/footer/FooterTwo/FooterTwo';
import HalfImageBlock from './HalfImageBlock/HalfImageBlock';
import BoldTextBlock from './BoldTextBlock/BoldTextBlock';
import RapsNavIcon from './ResponsiveView/RepsNavIcon';


export default function Home() {

  const className = useSelector(state => state.reducerSelectColourMode.colourMode);
  //const ColourVariant = useSelector(state => state.reducerSelectColourMode.variant);

  const styleVh = {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }

  const wideImage = 'https://yellow-website.com/d8-react-base-theme-backend/sites/default/files/photo_placeholder/japan3.jpg';

  return (
    <div className="business-one min-vh-100">

      <div className={className}>
        <ColourMode />
        <RapsNavIcon />
        <NavigationOne />


        <div className="container-fluid">

          {/** TITLE TEXT */}
          <div className="row min-vh-100">
            <HalfImageBlock />
            <BoldTextBlock />
          </div>


          {/** gap onlyb */}
          <div className="row mt-5"></div>


          {/** wide Image */}
          <div className="row">
            {/** properties 'src',  'alt' , width and height */}
            <WideImage width="100%" height="500px"
              alt="Service" src={wideImage} />
          </div>


          {/** SERVICES SIX BOXES */}
          <div style={styleVh} className="row mb-5 mt-5 min-vh-100">
            <Cards />
          </div>

          {/** Brief Intro */}
          <div style={styleVh} className="row mt-5 mb-5 min-vh-100">
            <BoxTen />
          </div>

          {/** FOOTER */}
          <div className="mb-5">
            <FooterTwo />
          </div>


        </div>
      </div>
    </div>
  )
}

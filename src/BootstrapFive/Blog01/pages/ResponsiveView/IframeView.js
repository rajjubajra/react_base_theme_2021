import React from 'react';
import { useSelector } from 'react-redux';
import ColourMode from '../../components/ColourMode/ColourMode';
import Title from '../../components/header/Titlte/Title';
import Footer from '../../components/footer/Footer';
import HomeDesktop from '../HomeDesktop';
import HomeTablet from '../HomeTablet';
import NavigationOne from '../../components/header/NavigationOne/NavigationOne';




export default function Home() {

  const colourMode = useSelector(state => state.reducerSelectColourMode.colourMode);
  //const ColourVariant = useSelector(state => state.reducerSelectColourMode.variant);


  return (
    <div className="blog-one">
      <div className={`${colourMode} pb-5`}>
        <ColourMode />
        <NavigationOne />

        {/** Title */}
        <Title title="Blogs" />

        {/** DESKTOP VIEW */}
        <div className="d-none d-lg-block d-xl-block ">
          <HomeDesktop />
        </div>

        {/** TABLET VIEW */}
        <div className="d-block d-sm-block d-md-block d-lg-none d-xl-none">
          <HomeTablet />
        </div>

        {/** MOBILE VIEW */}
        <Footer />
      </div>
    </div>
  )
}

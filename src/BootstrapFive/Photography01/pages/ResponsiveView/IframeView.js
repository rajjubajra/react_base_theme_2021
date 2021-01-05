import React from 'react';
import NavigationEight from '../../components/header/NavigationEight/NavigationEight';
import { useSelector } from 'react-redux';
import ColourMode from '../../components/ColourMode/ColourMode';
import HomeDesktop from '../Home/HomeDesktop';
import HomeTablet from '../Home/HomeTablet';
import HomeMobile from '../Home/HomeMobile';
import Service from '../Service/Service';
import Portfolio from '../Portfolio/Portfolio';
import About from '../About/About';
import Team from '../Team/Team';
import Clients from '../Clients/Clients';
import Contact from '../Contact/Contact';




export default function IframeView() {

  const className = useSelector(state => state.reducerSelectColourMode.colourMode);
  //const ColourVariant = useSelector(state => state.reducerSelectColourMode.variant);


  return (
    <div className="business-four">
      <ColourMode />

      <div className={`${className} container-fluid min-vh-100`}>
        <NavigationEight />


        <section id="home" className="my-5 py-5">
          <div className="d-none d-lg-block d-xl-block mt-5">
            <HomeDesktop />
          </div>
          <div className="d-none d-md-block d-lg-none d-xl-none mt-5">
            <HomeTablet />
          </div>
          <div className="d-block d-sm-block d-md-none d-lg-none d-xl-none mt-5">
            <HomeMobile />
          </div>
        </section>



        <div id="services" className="my-5 py-5 d-flex align-items-center justify-content-center min-vh-100">
          <Service />
        </div>


        <div id="portfolio" className="my-5 py-5">
          <Portfolio />
        </div>


        <div id="about" className="my-5 py-5">
          <About />
        </div>

        <div className="my-5 py-5 min-vh-100 d-flex align-items-center justify-content-center">
          <div className="mt-5 pt-5">
            <Team />
          </div>

        </div>

        <div id="clients" className="my-5 py-5">
          <Clients />
        </div>

        <div id="contact" className='my-5 py-5 min-vh-100'>
          <Contact />
        </div>











      </div>
    </div>
  )
}

import React from 'react';
import { useSelector } from 'react-redux';
import Aboutus from '../Aboutus/Aboutus';
import ColourMode from '../../components/ColourMode/ColourMode';
import NavigationOne from '../../components/header/NavigationOne/NavigationOne';
import SiteBanner from '../SiteBanner/SiteBanner';
import Services from '../Services/Services';
import Projects from '../Projects/Projects';
import Tools from '../Tools/Tools';
//import Review from '../Review/Review';
import SocialMedia from '../Socialmedia/SocialMedia';


export default function Home() {

  const className = useSelector(state => state.reducerSelectColourMode.colourMode);
  //const ColourVariant = useSelector(state => state.reducerSelectColourMode.variant);



  return (
    <div className="business-two">
      <div className={className}>
        <ColourMode />

        <NavigationOne />

        <div className="container-fluid">
          <div className="min-vh-100" id="b4-business-two-home">
            <section className="site-banner">
              <SiteBanner />
            </section>
          </div>

          <div className="min-vh-100 mb-5" id="b4-business-two-about">
            <section className="about-area">
              <Aboutus />
            </section>
          </div>

          <div className="min-vh-100 mb-5 mt-5" id="b4-business-two-services">
            <section className="services-area mt-5">
              <Services />
            </section>
          </div>

          <div className="mt-5 mb-5" id="b4-business-two-gallery">
            <section className="project-area">
              <Projects />
            </section>
          </div>

          <div className="min-vh-100 mt-5 mb-5" id="b4-business-two-clients">
            <section className="tools-area">
              <Tools />
            </section>
          </div>

          <div className="min-vh-100" id="b4-business-two-contact">
            {/* <section>
              <Review />
            </section> */}

            <section className="social-media-area">
              <SocialMedia />
            </section>
          </div>

        </div>
      </div>
    </div>
  )
}

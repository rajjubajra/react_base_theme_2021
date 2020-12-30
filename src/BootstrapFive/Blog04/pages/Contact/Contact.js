import React from 'react';
import NavigationOne from '../../components/header/NavigationOne/NavigationOne';
import ColourMode from '../../components/ColourMode/ColourMode';
import { useSelector } from 'react-redux';
import Title from '../../components/header/Titlte/Title';
import ContactBg from './ContacgBg';
import FormSix from './FormSix';
import Footer from '../../components/footer/Footer';


export const Contact = () => {
  /** dyanamic color */
  const className = useSelector(state => state.reducerSelectColourMode.colourMode);
  //const ColourVariant = useSelector(state => state.reducerSelectColourMode.variant);

  const textbg = {
    position: 'relative',
    padding: "10 45px",
    zIndex: "10",
  }

  return (
    <div className="blog-four">

      <div className={className}>
        <ColourMode />
        {/** NAVIGATION */}
        <NavigationOne />



        <Title title="Contact" hideLink={true} />

        <div className="container mt-5 mb-5 min-vh-100">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10 col-sm-12">
              <div style={textbg}>
                <FormSix />
              </div>
            </div>
          </div>
        </div>
        <Footer />

      </div>
    </div>
  )
}

export default Contact;

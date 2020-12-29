import React from 'react'
import { useSelector } from 'react-redux';
import FormSix from './Contact/FormSix';
import ColourMode from '../components/ColourMode/ColourMode';
import NavigationOne from '../components/header/NavigationOne/NavigationOne';
import EmailNTel from './address/EmailNTel';



export const Contact = () => {

  /** DYANMIC COLOR THEME */
  const className = useSelector(state => state.reducerSelectColourMode.colourMode);
  //const ColourVariant = useSelector(state => state.reducerSelectColourMode.variant);
  /** COLOR THEME CLOSED */


  return (
    <div className="music-two">


      <div className={className}>
        <ColourMode />
        <NavigationOne />
        <div className="container mt-5 min-vh-100">

          <div className="row">
            <div className="col">
              <FormSix />
            </div>
          </div>
          <div className="row d-flex justify-content-center">
            <div className="col-10">
              <EmailNTel />
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
export default Contact;
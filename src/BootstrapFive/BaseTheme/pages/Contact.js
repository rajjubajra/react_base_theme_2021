import React from 'react'
import { useSelector } from 'react-redux';
import Nav from '../components/header/Nav';


export const Contact = () => {

  /** dyanamic colour */
  const className = useSelector(state => state.reducerSelectColourMode.colourMode);
  //const ColourVariant = useSelector(state => state.reducerSelectColourMode.variant);


  return (
    <div className={className}>
      <Nav />
      <div className="container">
        <div className="row">
          <div className="col"><h1>About</h1></div>
        </div>
      </div>
    </div>
  )
}

export default Contact;

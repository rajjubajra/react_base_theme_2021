import React from 'react';
import { useSelector } from 'react-redux';
import ColourMode from '../components/ColourMode/ColourMode';
import PhotoPlaceholder from '../components/PhotoPlaceholder/PhotoPlaceholder';


export default function Home() {

  const className = useSelector(state => state.reducerSelectColourMode.colourMode);
  //const ColourVariant = useSelector(state => state.reducerSelectColourMode.variant);


  return (
    <div className={className}>
      <ColourMode />


      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-6">

            <h1>Business Four ...</h1>

          </div>
        </div>
      </div>
    </div>
  )
}

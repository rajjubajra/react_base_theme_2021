import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ColourMode from '../../../components/ColourMode/ColourMode';
import Image from '../../../components/Image';


export const ColumnOne = () => {

  const [className, setClassName] = useState('light');
  //const [colourVariant, setColourVariant] = useState('light');

  const colorMode = useSelector(state => state.reducerSelectColourMode.colourMode);
  const variant = useSelector(state => state.reducerSelectColourMode.variant);
  console.log(colorMode);

  useEffect(() => {
    setClassName(colorMode);
    // setColourVariant(variant);
  }, [colorMode, variant])
  /** COLOUR MODE CLOSED */



  /** ABOUT DATA */
  const state = useSelector(state => state.reducerFetchAbout.data);
  const dataLength = useSelector(state => state.reducerFetchAbout.dataLength);


  function createMarkup(news, rownum, length) {
    /** body content 500 words only */
    const body = length > 0
      ? news[rownum].body[0].processed
      : '<p>........</p>'
    return {
      __html: body
    };
  };

  const img = 'http://yellow-website.com/d8-react-base-theme-backend/sites/default/files/photo_placeholder/Music2011_14.JPG'

  return (
    <div className={className}>
      <ColourMode />
      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <h1>{dataLength > 0 && state[0].title[0].value}</h1>
            <h5 style={{ fontStyle: "italic", letterSpacing: "0.1rem" }}>
              "Klias quisquam soluta vitae in magnam, molestiae explicabo, qui amet officia"
            </h5>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col">
            {/** desktop */}
            <div className="d-none d-lg-block d-xl-block" style={{ float: "left", margin: "0px 20px 0px 0px" }}>
              <Image img={img} width="500px" height="300px" />
            </div>
            {/** tablet */}
            <div className="d-none d-md-block d-lg-none" style={{ float: "left", margin: "0px 20px 0px 0px" }}>
              <Image img={img} width="500px" height="300px" />
            </div>
            {/** mobile */}
            <div className="d-none d-sm-block d-md-none" style={{ float: "left", margin: "0px 20px 20px 0px" }}>
              <Image img={img} width="100%" height="300px" />
            </div>
            {/** extra small  */}
            <div className="d-block d-sm-none" style={{ margin: "0px 20px 20px 0px" }}>
              <Image img={img} width="100%" height="200px" />
            </div>
            <div>
              <div dangerouslySetInnerHTML={createMarkup(state, 0, dataLength)} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ColumnOne;

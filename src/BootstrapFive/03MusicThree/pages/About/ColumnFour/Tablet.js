import React from 'react';
import Image from '../../../components/Image';

function Tablet(props) {


  function createMarkup(news, rownum, length) {
    /** body content 500 words only */
    const body = length > 0
      ? news[rownum].body[0].processed
      : '<p>........</p>'
    return {
      __html: body
    };
  };

  const backgroundStyle = {
    transform: "rotate(90deg)",
    width: "100%",
    fontSize: "200px",
    color: "rgba(205,205,205,0.34)"
  }


  return (
    <div className="container">
      <div className="row mb-5 ml-3">
        <div className="col-md-6">
          <Image img={props.img} width="100%" height="500px" />
        </div>
        <div style={backgroundStyle} className="col-md-6">
          <section style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}>
            About
          </section>
        </div>
      </div>
      <div className="row ml-3">
        <div className="col-md-12">
          <div>
            <h1>{props.dataLength > 0 && props.state[0].title[0].value}</h1>
            <div dangerouslySetInnerHTML={createMarkup(props.state, 0, props.dataLength)} />
          </div>

        </div>
      </div>
    </div>
  )
}
export default Tablet
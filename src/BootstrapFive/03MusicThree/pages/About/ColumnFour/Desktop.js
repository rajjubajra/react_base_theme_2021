import React from 'react';
import Image from '../../../components/Image';


function Desktop(props) {


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
    width: "100%",
    fontSize: "200px",
    position: "fixed",
    top: "30%",
    left: "47%",
    color: "rgba(205,205,205,0.34)"
  }


  return (
    <div className="container-fluid">
      <div className="row ml-4">
        <div className="col-lg-4">
          <Image img={props.img} width="100%" height="500px" />
        </div>
        <div className="col-lg-8">
          <div style={{ margin: "0px 50px 100px 30px" }}>
            <h1>{props.dataLength > 0 && props.state[0].title[0].value}</h1>
            <div dangerouslySetInnerHTML={createMarkup(props.state, 0, props.dataLength)} />
          </div>

        </div>
      </div>
      <div className="row">
        <div style={backgroundStyle}>
          <section>
            About
          </section>
        </div>
      </div>

    </div>
  )
}

export default Desktop


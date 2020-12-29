import React from 'react';
import Image from '../../../components/Image';

function Mobile(props) {


  function createMarkup(news, rownum, length) {
    /** body content 500 words only */
    const body = length > 0
      ? news[rownum].body[0].processed
      : '<p>........</p>'
    return {
      __html: body
    };
  };

  // const backgroundStyle = {
  //   width: "100%",
  //   fontSize: "200px",
  //   position: "fixed",
  //   top: "30%",
  //   color: "rgba(205,205,205,0.34)"
  // }


  return (
    <div className="container mb-5">
      <div className="row">
        <div className="col-sm-12 mb-5">
          <Image img={props.img} width="100%" height="300px" />
        </div>
        <div className="col-sm-12">
          <h1>{props.dataLength > 0 && props.state[0].title[0].value}</h1>
          <div dangerouslySetInnerHTML={createMarkup(props.state, 0, props.dataLength)} />
        </div>
      </div>
    </div>
  )
}

export default Mobile


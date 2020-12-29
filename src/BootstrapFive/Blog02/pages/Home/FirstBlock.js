import React from 'react';
import DangerouslySetInnerHtml from '../Utilities/DangerouslySetInnterHtml';


function FirstBlock(props) {

  const text = props.data.length > 0 && props.data[0].body.substring(0, 200);
  const textNext = props.data.length > 0 && props.data[0].body.substring(1000, 198);

  return (
    <>
      {/** DESKTOP AND TABLET */}
      <div className="d-none d-md-block d-lg-block d-xl-block">
        <div className="row">
          <div className="col">
            <div className="large-font">
              <DangerouslySetInnerHtml text={text} />
            </div>
            <div style={{ height: "100px" }}></div>
            <div className="medium-font">
              <DangerouslySetInnerHtml text={textNext} />
            </div>
          </div>
        </div>
      </div>

      {/** MOBILE DEVICE */}
      <div className="d-block d-md-none d-lg-none d-xl-none">
        <div className="row mb-5">
          <div className="col">
            <div className="large-font-mobile">
              <DangerouslySetInnerHtml text={text} />
            </div>
            <div style={{ height: "50px" }}></div>
            <div>
              <DangerouslySetInnerHtml text={textNext} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FirstBlock
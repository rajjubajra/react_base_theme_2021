import React from 'react';
import { Link } from 'react-router-dom';
import DangerouslySetInnerHtml from '../../components/DangerouslySetInnterHtml';
import { pagelink } from '../../PageLink';


function ViewBoxLanding(props) {


  const { nid, title, body, taxoName, dateNonFormated, dateFormated, pager } = props;

  const titleTaged = `<h4>${title}</h4>`

  const monthname = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']



  function IsDateNonFormated(dateNonFormated) {
    const dt = new Date(dateNonFormated);
    const showDate = `${dt.getDate()}  ${monthname[dt.getMonth()]},  ${dt.getFullYear()}`;
    return dateNonFormated && showDate
  }


  const boxStyle = {
    height: "450px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    zIndex: 10
  }


  return (
    <>

      <div style={boxStyle} className="view-box">
        {/** VIEW TEXT */}

        <div className="text">
          {/** Block Title */}

          {/** TITLE */}
          <div>
            <DangerouslySetInnerHtml text={titleTaged} substr={0} />
          </div>

          {/** TAXONOMY TERMS */}
          <div>
            <DangerouslySetInnerHtml text={taxoName} substr={0} />
          </div>

          {/** MAIN TEXT BODY */}
          <div>
            <DangerouslySetInnerHtml
              text={body}
              substr={props.substr ? props.substr : 300} />
          </div>
        </div>

      </div>

      {/** view box footer */}
      <div style={{
        position: "absolute",
        bottom: "35px",
        width: "70%",
        zIndex: 10,
      }}>
        <div className="d-flex w-100 justify-content-between">
          {/** FORMATED DATE  OR NOT FORMATTED DATE */}
          <div className="medium-font">
            {dateFormated
              ? dateFormated
              : IsDateNonFormated(dateNonFormated)}
          </div>

          {/** NAVIGATE TO READ MORE PAGE */}
          <div>
            <Link
              className="btn btn-light small-font text-uppercase"
              to={{
                pathname: `/${pagelink.readMore}/${nid}`,
                state: { pager: pager }
              }}>Read More</Link>
          </div>
        </div>
      </div>

    </>
  )
}
export default ViewBoxLanding
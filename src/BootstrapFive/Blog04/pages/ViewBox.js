import React from 'react';
import './ViewBox.scss';
import { Link } from 'react-router-dom';
import DangerouslySetInnerHtml from '../components/DangerouslySetInnterHtml';
import { pagelink } from '../PageLink';


function ViewBox(props) {


  const { nid, title, body, taxoName, dateNonFormated, dateFormated, pager } = props;

  const titleTaged = `<h4>${title}</h4>`

  const monthname = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']



  function IsDateNonFormated(dateNonFormated) {
    const dt = new Date(dateNonFormated);
    const showDate = `${dt.getDate()}  ${monthname[dt.getMonth()]},  ${dt.getFullYear()}`;
    return dateNonFormated && showDate
  }



  return (
    <div style={{ position: "relative", height: "300px" }}>

      <div className="view-box mt-3">
        {/** VIEW TEXT */}

        <div className="text">
          {/** Block Title */}

          {/** TITLE */}
          <div className="mb-3">
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
        bottom: "40px",
        width: "80%",
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
              className="small-font text-uppercase ml-4 mt-1 btn-read-more"
              to={{
                pathname: `/${pagelink.readMore}/${nid}`,
                state: { pager: pager }
              }}>Read More</Link>
          </div>
        </div>
      </div>

    </div>
  )
}
export default ViewBox
import React from 'react';
import './ViewBox.scss';
import { Link } from 'react-router-dom';
import DangerouslySetInnerHtml from '../components/DangerouslySetInnterHtml';
import { pagelink } from '../PageLink';


function ViewBox(props) {


  const { nid, title, body, taxoName, dateNonFormated, dateFormated, pager } = props;


  const monthname = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']


  function IsDateNonFormated(dateNonFormated) {
    const dt = new Date(dateNonFormated);
    const showDate = `${dt.getDate()}  ${monthname[dt.getMonth()]},  ${dt.getFullYear()}`;
    return dateNonFormated && showDate
  }

  //console.log("DATE ???", dt, dateNonFormated);



  return (
    <div className="mt-5 mb-5 view-box">

      {/** Block Title */}
      <div className="d-flex justify-content-between mb-2">
        {/** TITLE */}
        <div>
          <DangerouslySetInnerHtml text={title} substr={0} />
        </div>
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



      {/** LINK TO READ MORE PAGE */}


      <div className="small-font">
        {/** FORMATED DATE  OR NOT FORMATTED DATE */}
        {dateFormated
          ? dateFormated
          : IsDateNonFormated(dateNonFormated)}
      </div>

      {/** NAVIGATE TO READ MORE PAGE */}
      <div className="mt-3 d-flex justify-content-end">
        <Link
          className="small-font text-uppercase btn-read-more"
          to={{
            pathname: `/${pagelink.readMore}/${nid}`,
            state: { pager: pager }
          }}>
          Read More</Link>
      </div>





    </div>
  )
}
export default ViewBox
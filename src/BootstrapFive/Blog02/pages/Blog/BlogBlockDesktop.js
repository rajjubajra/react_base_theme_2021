import React from 'react'
import DangerouslySetInnerHtml from '../Utilities/DangerouslySetInnterHtml';
import { DayMonthCommaYear } from '../Utilities/DateFormat';
import { Link } from 'react-router-dom';
import { pagelink } from '../../PageLink';




function BlogBlockDesktop(props) {


  const linkStyle = {
    border: "1px solid rgb(204, 204, 204)",
    padding: "0px 18px",
    width: "120px",
    margin: "55px 0px",
    position: "relative",
    zIndex: "50"
  }

  const { nid, title, created, body } = props;

  return (
    <div key={nid} className="row">
      <div className="col-lg-6 col-md-6 col-sm-10  mt-5 mb-5">
        <section style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          padding: "0px 20px"
        }}>
          <h3>{title}</h3>
          <p>{DayMonthCommaYear(created)}</p>
          <Link
            style={linkStyle}
            to={{
              pathname: `/${pagelink.readmore}/${nid}`,
              state: { pager: props.pager }
            }}
          >Read More</Link>
        </section>
      </div>
      <div className="col-lg-6 col-md-6 col-sm-10 mt-5 mb-5">
        <section
          className="first-big-letter"
          style={{
            borderLeft: "1px solid #ccc",
            padding: "0px 20px"
          }}>
          <DangerouslySetInnerHtml text={body} substr={300} />
        </section>
      </div>
    </div>


  )
}

export default BlogBlockDesktop

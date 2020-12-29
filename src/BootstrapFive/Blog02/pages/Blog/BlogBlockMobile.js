import React from 'react'
import DangerouslySetInnerHtml from '../Utilities/DangerouslySetInnterHtml';
import { DayMonthCommaYear } from '../Utilities/DateFormat';
import { Link } from 'react-router-dom';
import { pagelink } from '../../PageLink';




function BlogBlockMobile(props) {


  const linkStyle = {
    bottom: "5px",
    right: "20px",
    border: "1px solid #ccc",
    padding: "4px 18px",
    margin: "20px  0px"

  }

  const { nid, title, created, body } = props;

  return (
    <>
      <div key={nid} className="row">
        <div className="col-sm-10  mt-5">
          <section style={{
            width: "100%",
            position: "absolute",
            bottom: "5px",
            display: "flex",
            flexDirection: "column",
            padding: "0px 20px"
          }}>
            <h3>{title}</h3>
            <p>{DayMonthCommaYear(created)}</p>
          </section>
        </div>
      </div>
      <div className="row mb-5">
        <div className="col-sm-10 mb-5">
          <section
            className="first-big-letter"
            style={{
              borderLeft: "1px solid #ccc",
              padding: "5px 20px 15px 20px"
            }}>
            <DangerouslySetInnerHtml text={body} substr={300} />
          </section>
          <Link
            style={linkStyle}
            to={{
              pathname: `/${pagelink.readmore}/${nid}`,
              state: { pager: props.pager }
            }}>Read More</Link>
        </div>
      </div>
    </>

  )
}

export default BlogBlockMobile

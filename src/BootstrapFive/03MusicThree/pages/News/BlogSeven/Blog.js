import React from 'react';
import { Link } from 'react-router-dom';
import { pagelink } from '../../../PageLink';
import { DayMonthCommaYear } from './DateFormat';
import DangerouslySetInnterHtml from './DangerouslySetInnterHtml';
import PhotoMusic from '../../../components/PhotoPlaceholder/PhotoMusic';

const sectionStyle = {
  width: "100%",
  marginBottom: "150px",
  borderLeft: "1px solid #eee",
  paddingLeft: "20px",
}

const dateStyle = {
  fontSize: "0.9rem",
  fontWeight: "100",
  letterSpacing: "0.05rem"
}

const titleStyle = {
  textTransform: "capitalize",
  fontWeight: "200",
  margin: "20px 0px"
}

const buttonStyle = {
  fontWeight: "100",
  letterSpacing: "0.1rem",
  padding: "0px 20px 10px 20px",
  borderBottom: "1px solid #ccc",
  textDecoration: "none",
  color: "#333",
  cursor: "pointer"
}



function Blog(props) {

  const { id, title, body, date, nid } = props;

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-6 col-sm-6">
          <PhotoMusic width="100%" height="200px" />
        </div>
        <div className="col-lg-9 col-md-6 col-sm-10">
          <section style={sectionStyle}>
            <p>{id}</p>
            <p style={dateStyle}>{DayMonthCommaYear(date)}</p>
            <h1 style={titleStyle} >{title}</h1>
            <div style={{ width: "100%", margin: "0px auto" }}>
              <DangerouslySetInnterHtml text={body.substring(0, 150)} />
            </div>

            <Link
              to={`/${pagelink.newsReadMore}/${nid}`}
              style={buttonStyle}>
              Read More
            </Link>
          </section>

        </div>
      </div>
    </div>

  )

}
export default Blog
import React from 'react';
import './HomeDesktop.scss';
import DangerouslySetInnerHtml from '../DangerouslySetInnterHtml';
//import { Link } from 'react-router-dom';




export default function HomeMobile(props) {

  /** colour variant */
  //const variant = useSelector(state => state.reducerSelectColourMode.variant);

  const { title, logoHorz,
    logoHorzAlt,
    body } = props;


  return (
    <div className="container-fluid home-desktop">
      <div className="row">
        <div className="col-sm-12">
          <div style={{
            width: "100",
            display: "flex",
            height: "85vh",
            justifyContent: "center",
            alignItems: "center"
          }}>
            <div>
              <h1 style={{
                fontFamily: "'Mrs Saint Delafield', cursive",
                transform: "scale(1.6) translate(46px, 10px)"
              }}>{title}</h1>
              <div className="logo-h">
                <img
                  style={{ width: "100%", maxWidth: "300px", height: "auto" }}
                  src={logoHorz}
                  alt={logoHorzAlt} />
              </div>

              <section className="body mt-5">
                <DangerouslySetInnerHtml text={body} />
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
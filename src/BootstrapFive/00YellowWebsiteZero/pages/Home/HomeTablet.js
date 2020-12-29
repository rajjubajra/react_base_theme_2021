import React from 'react';
import './HomeDesktop.scss';
import DangerouslySetInnerHtml from '../DangerouslySetInnterHtml';
//import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
//import Envelope from './Envelope';



export default function HomeDesktop(props) {

  /** colour variant */
  //const variant = useSelector(state => state.reducerSelectColourMode.variant);

  const { fetched, title, logoHorz,
    logoHorzAlt, logoSquare, logoSquareAlt,
    body, links } = props;



  return (
    <div className="container-fluid home-desktop">
      <div className="row">
        <div className="col-md-4">
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
              {/* <div className="logo-sqr">
              <img src={logoSquare} alt={logoSquareAlt} />
            </div> */}
              <section className="body mt-5">
                <DangerouslySetInnerHtml text={body} />
              </section>
            </div>
          </div>
        </div>

        <div className="col-md-8">
          <div className='right-block'>
            <div></div>
            <div>
              {
                fetched &&
                <Link to={{ pathname: `${links[0].uri}` }}>
                  {links[0].title}
                </Link>
              }
            </div>
            <div>
              <img className="img-fluid" src={logoSquare} alt={logoSquareAlt} />
            </div>
            <div></div>
            <div></div>
            <div>
              {
                fetched &&
                <Link to={{ pathname: `${links[1].uri}` }}>
                  {links[1].title}
                </Link>
              }
            </div>
            <div>
              {
                fetched &&
                <Link to={{ pathname: `${links[2].uri}` }}>
                  {links[2].title}
                </Link>
              }
            </div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div>
              {
                fetched &&
                <Link to={{ pathname: `${links[3].uri}` }}>
                  {links[3].title}
                </Link>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
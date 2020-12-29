import React from 'react';
import TitleDesktop from './TitlteDesktop';
import TitleMobile from './TitleMobile';
import TitleTablet from './TitleTablet';



function Title(props) {

  //const title = 'Blogs';
  const searchIcon = "https://yellow-website.com/d8-react-base-theme-backend/sites/default/files/photo_placeholder/Icon%20ionic-ios-search.png";

  const mainDivStyle = {
    width: "100%",
    borderBottom: "1px solid #eee",
    marginBottom: "20px"
  }

  /** ?? * props.hideLink allow to Hide or show Search Icon */
  //console.log("HIDE LINK", props.hideLink);

  return (
    <>
      <div className="d-none d-lg-block d-xl-block">
        <TitleDesktop
          mainDivStyle={mainDivStyle}
          title={props.title}
          searchIcon={searchIcon}
          hideLink={props.hideLink} /** ?? */
        />
      </div>
      <div className="d-none d-md-block d-lg-none">
        <TitleTablet
          mainDivStyle={mainDivStyle}
          title={props.title}
          searchIcon={searchIcon}
          hideLink={props.hideLink} /** ?? */
        />
      </div>
      <div className="d-block d-sm-block d-md-none d-lg-none d-xl-none">
        <TitleMobile
          mainDivStyle={mainDivStyle}
          title={props.title}
          searchIcon={searchIcon}
          hideLink={props.hideLink} /** ?? */
        />
      </div>
    </>

  )
}

export default Title
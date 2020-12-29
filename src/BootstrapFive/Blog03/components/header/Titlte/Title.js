import React from 'react';
import TitleDesktop from './TitlteDesktop';
import TitleMobile from './TitleMobile';
import TitleTablet from './TitleTablet';



function Title(props) {

  const title = props.title;
  const searchIcon = "https://yellow-website.com/d8-react-base-theme-backend/sites/default/files/photo_placeholder/Icon%20ionic-ios-search.png";

  const mainDivStyle = {
    width: "100%",
    borderBottom: "1px solid #eee",
    marginBottom: "20px"
  }

  /** ?? * props.hideLink allow to Hide or show Search Icon */
  //console.log("HIDE LINK", props.hideLink);

  return (
    <div className="d-flex justify-content-center w-100">
      <div className="d-none d-lg-block d-xl-block">
        <TitleDesktop
          mainDivStyle={mainDivStyle}
          title={title}
          searchIcon={searchIcon}
          hideLink={props.hideLink} /** ?? */
        />
      </div>
      {/** TITLE FOR TABLET */}
      <div className="d-none d-md-block d-lg-none">
        <TitleTablet
          mainDivStyle={mainDivStyle}
          title={title}
          searchIcon={searchIcon}
          hideLink={props.hideLink} /** ?? */
        />
      </div>
      {/** TITLE FOR MOBILE */}
      <div className="d-block d-sm-block d-md-none d-lg-none d-xl-none">
        <TitleMobile
          mainDivStyle={mainDivStyle}
          title={title}
          searchIcon={searchIcon}
          hideLink={props.hideLink} /** ?? */
        />
      </div>
    </div>

  )
}

export default Title
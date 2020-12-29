import React from 'react';
import { pagelink } from '../../PageLink';
import GalleryIntroDesktop from './GalleryIntroDesktop';
import GalleryIntroTablet from './GalleryIntroTablet';
import GalleryIntroMobile from './GalleryIntroMobile';
import { useSelector } from 'react-redux';





// const body = "<div><h1>Yellow Website Themes</h1><div><ul><li>Please select the theme that meets your requirement and you like.</li><li>Provide me your contents and Photographs.</li><li>Write to me for minor modification</li><li>I will deliver your live site within a week.</li></ul></div></div>";



const links = [
  {
    title: "Music Artist",
    link: `${pagelink.themes}`
  },
  {
    title: "Blog Post",
    link: `${pagelink.themes}`
  },
  {
    title: "Business",
    link: `${pagelink.themes}`
  },
  {
    title: "..more Comming Up",
    link: `${pagelink.themes}`
  },
]




function GalleryIntro() {


  const body = useSelector(state => state.reducerFetchData.galleryIntro);

  console.log(body);

  return (
    <>
      <div className="d-none d-lg-block d-xl-block">
        <GalleryIntroDesktop body={body} links={links} />
      </div>

      <div className="d-none d-md-block d-lg-none d-xl-none">
        <GalleryIntroTablet body={body} links={links} />
      </div>

      <div className="d-block d-sm-block d-md-none d-lg-none d-xl-none">
        <GalleryIntroMobile body={body} links={links} />
      </div>
    </>
  )
}
export default GalleryIntro
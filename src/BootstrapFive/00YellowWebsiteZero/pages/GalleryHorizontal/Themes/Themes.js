import React from 'react';
import './style.scss';
import { useSelector } from 'react-redux';
import ThemeDesktop from './ThemeDesktop';
import ThemeMobile from './ThemeMobile';
import ThemeTablet from './ThemeTablet';



const data = [

  {
    id: 1,
    title: "Music One",
    linkref: "/b4MusicOne-home",
    text: "Music",
    type: "Band / Solo Artist",
    features: "<ul><li>Music Album Page</li><li>Sort Playlist link to Spotiy</li><li>Tour Calendar</li><li>News</li><li>Gallery</li><li>Fans Club Form</li></ul>",
    bgImage: "https://yellow-website.com/d8-react-base-theme-backend/sites/default/files/photo_placeholder/Thumbnail2_0_0.png"
  },

  {
    id: 2,
    title: "Music Two",
    linkref: "/b4Music-two-home",
    text: "Music",
    type: "Band / Solo Artist",
    features: "<ul><li>Music Album Page</li><li>Sort Playlist - Link to Spotiy</li><li>About Page</li><li>Contact Page</li></ul>",
    bgImage: "https://yellow-website.com/d8-react-base-theme-backend/sites/default/files/photo_placeholder/Thumbnail3_0.png"
  },

  {
    id: 3,
    title: "Music Three",
    linkref: "/b4Music-three-home",
    text: "Music",
    type: "Band / Solo Artist",
    features: "<ul><li>Music Album Page</li><li>Sort Playlist link to Spotiy</li><li>Tour Calendar</li><li>News</li><li>Gallery</li><li>Contact Form</li></ul>",
    bgImage: "https://yellow-website.com/d8-react-base-theme-backend/sites/default/files/photo_placeholder/Thumbnail4_0.png",
  },

  {
    id: 4,
    title: "Blog One",
    linkref: "/b4Blog-one-",
    text: "Blog",
    type: "Blog",
    features: "<ul><li>Blog Page</li><li>News Letter Page</li><li>Popular Blog Column</li><li>Blog Search</li><li>Blog by Category</li><li>Blog By month</li></ul>",
    bgImage: "https://yellow-website.com/d8-react-base-theme-backend/sites/default/files/photo_placeholder/Thumbnail5.png",
  },

  {
    id: 5,
    title: "Blog Two",
    linkref: "/b4Blog-two-",
    text: "Blog",
    type: "Blog",
    features: "<ul><li>Blog Post</li><li>News Letter</li><li>Blog By month</li><li>About</li><li>Contact</li></ul>",
    bgImage: "https://yellow-website.com/d8-react-base-theme-backend/sites/default/files/photo_placeholder/Thumbnail6.png",
  },

  {
    id: 6,
    title: "Blog Three",
    linkref: "/b4Blog-three-",
    text: "Blog",
    type: "Blog",
    features: "<ul><li>Blog Page</li><li>News Letter Page</li><li>Popular Blog Column</li><li>Blog Search</li><li>Blog by Category</li><li>Blog By month</li></ul>",
    bgImage: "https://yellow-website.com/d8-react-base-theme-backend/sites/default/files/photo_placeholder/Thumbnail7.png",
  },

  {
    id: 7,
    title: "Blog Four",
    linkref: "/b4Blog-four-",
    text: "Blog",
    type: "Blog",
    features: "<ul><li>Blog Page</li><li>News Letter Page</li><li>Popular Blog Column</li><li>Blog Search</li><li>Blog by Category</li><li>Blog By month</li></ul>",
    bgImage: "https://yellow-website.com/d8-react-base-theme-backend/sites/default/files/photo_placeholder/Blog-4.png",
  },

  {
    id: 8,
    title: "Business One",
    linkref: "/b4-business-one-home",
    text: "Local Business / Professional service",
    type: "Business",
    features: "<ul><li>services</li><li>About us</li><li>Contact Form</li><li>Social Media Link</li></ul>",
    bgImage: "https://yellow-website.com/d8-react-base-theme-backend/sites/default/files/photo_placeholder/Business1.png"
  },

  {
    id: 9,
    title: "Business Two",
    linkref: "/b4-business-two",
    text: "Local Business / Professional service",
    type: "Business",
    features: "<ul><li>Services</li><li>About us</li><li>Clients</li><li>Projects</li><li>Gallery</li><li>Social Media Link</li><li>Contact Form</li></ul>",
    bgImage: "https://yellow-website.com/d8-react-base-theme-backend/sites/default/files/photo_placeholder/Business2.png",
  },

  {
    id: 10,
    title: "Business Three",
    linkref: "/b4-business-three",
    text: "Local Business / Professional service",
    type: "Business",
    features: "<ul><li>Services</li><li>Portfolio</li><li>Team</li><li>Gallery</li><li>Social Media Link</li><li>Contact Form</li></ul>",
    bgImage: "https://yellow-website.com/d8-react-base-theme-backend/sites/default/files/photo_placeholder/business-3.png",
  },

];



function Themes(props) {

  const className = useSelector(state => state.reducerSelectColourMode.colourMode);

  return (
    <div className='yellow-website-zero'>
      <div className={className}>
        <div className="d-none d-lg-block d-xl-block">
          <ThemeDesktop data={data} />
        </div>
        <div className="d-none d-md-block d-lg-none d-xl-none">
          <ThemeTablet data={data} />
        </div>
        <div className="d-block d-sm-block d-md-none d-lg-none d-xl-none pb-5 mb-5">
          <ThemeMobile data={data} />
        </div>
      </div>
    </div>
  )
}

export default Themes;
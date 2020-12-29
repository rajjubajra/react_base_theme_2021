import React from 'react';
import './style.scss';
import ThemeDesktop from './ThemeDesktop';
import ThemeTablet from './ThemeTablet';
import ThemeMobile from './ThemeMobile';
import { useSelector } from 'react-redux';



const data = [


  {
    id: 1,
    title: "PlustIt Recruitment",
    linkref: "http://www.pulseitrecruitment.co.uk/",
    type: "Recruitment Agency",
    features: "<ul><li>Job Listing</li><li>Embedded Tweets</li><li>CV upload Form</li><li>Contact Form</li><li>Social Media Links</li><li>Custom made Drupal 8 Theme</li></ul>",
    bgImage: "https://yellow-website.com/d8-react-base-theme-backend/sites/default/files/photo_placeholder/pulseIt.png"
  },
  {
    id: 2,
    title: "Everest Spice Plymouth",
    linkref: "http://www.everestspiceplymouth.uk/",
    type: "Restaurant",
    features: "<ul><li>Online Table Booking</li><li>Embedded Tripadvisor review</li><li>Takeaway and Restaurnat Menu</li><li>Facebook Likes and Share Icon</li><li>Contact Form</li><li>Custom made Wordpress Theme</li></ul>",
    bgImage: "https://yellow-website.com/d8-react-base-theme-backend/sites/default/files/photo_placeholder/everest-spice.png"
  },

];



function Clients(props) {

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

export default Clients;

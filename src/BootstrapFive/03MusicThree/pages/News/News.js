import React, { useEffect, useState } from 'react';
import NavigationOne from '../../components/header/NavigationOne/NavigationOne';
import ColourMode from '../../components/ColourMode/ColourMode';
//import BlogOne from './BlogOne/BlogOne';
import BlogSeven from './BlogSeven/BlogSeven';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import SocialMeidiaSticky from '../../components/socalMedia/SocialMediaSticky';


export const News = () => {

  /** DYANMIC THAME COLOUR */
  const [className, setClassName] = useState('light');
  //const [colourVariant, setColourVariant] = useState('light');

  const colorMode = useSelector(state => state.reducerSelectColourMode.colourMode);
  const variant = useSelector(state => state.reducerSelectColourMode.variant);
  console.log(colorMode);

  useEffect(() => {
    setClassName(colorMode);
    // setColourVariant(variant);
  }, [colorMode, variant])
  /** DYNAMIC THEME COLOUR CLOSED */

  /** FOR back to same page from readmore-news page */
  const { currentPage } = useParams();
  const { lastPage } = useParams();
  console.log("current page", currentPage, "lastpage", lastPage);


  return (
    <div className="music-three">

      <div className={`${className} pb-5 min-vh-100`}>
        <ColourMode />
        <NavigationOne />
        <SocialMeidiaSticky />
        <BlogSeven currentPage={currentPage} lastPage={lastPage} />
      </div>

    </div>
  )
}
export default News;
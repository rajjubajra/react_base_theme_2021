import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavigationOne from '../../components/header/NavigationOne/NavigationOne';
import ColourMode from '../../components/ColourMode/ColourMode';
import { useSelector, useDispatch } from 'react-redux';
import { actionFetchTracks } from './Redux/ActionFetchTracks';
import Albums from './Albums';
import { pagelink } from '../../PageLink';
import SocialMediaSticky from '../../components/socalMedia/SocialMediaSticky';

function Music() {

  const dispatch = useDispatch();

  /** COLOR MODE */
  const colorMode = useSelector(state => state.reducerSelectColourMode.colourMode);
  //const variant = useSelector(state => state.reducerSelectColourMode.variant);
  /** COLOR MODE CLOSED */


  /** RUN ACTON TO FETCH TRACKS */
  useEffect(() => {
    dispatch(actionFetchTracks())
  }, [dispatch])


  /** FETCHED DATA FROM reducer */
  const tracksData = useSelector(state => state.reducerFetchTracks.data);
  const dataLength = useSelector(state => state.reducerFetchTracks.dataLength);


  //  console.log("TRACK DATA", tracksData);


  return (
    <div className="music-one">
      <div className={`${colorMode} pb-5`}>
        <ColourMode />
        <NavigationOne />
        <SocialMediaSticky />
        <div className="container pb-5">
          <div className="row mt-5 pb-2">
            <div className="col"><h1>Music</h1></div>
          </div>
          <div className="row">
            {
              dataLength > 0 && tracksData.map((item, index) => {
                return <div key={index} className="col-lg-4 col-md-6">
                  <Link
                    className="custom-color" to={`${pagelink.album}/${item.nid[0].value}`}>
                    <Albums
                      title={item.title[0].value}
                      img={item.field_track_cover_image[0].url}
                      alt={item.field_track_cover_image[0].alt}
                      body={item.body[0].value}
                    />
                  </Link>
                </div>
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Music

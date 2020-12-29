import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import NavigationOne from '../../components/header/NavigationOne/NavigationOne';
import ColourMode from '../../components/ColourMode/ColourMode';
import { useSelector, useDispatch } from 'react-redux';
import { actionFetchAlbum } from './Redux/ActionFetchAlbum';
import PlayingTrack from './PlayingTrack';
import Play from './MusicPlayer/Play';
import IconClose from '../../components/Icon/IconClose';
import { pagelink } from '../../PageLink';
import SocialMediaSticky from '../../components/socalMedia/SocialMediaSticky';
import CopyToClipBoard from '../../components/CopyToClipBoard';



function Album() {

  /** COLOR MODE */
  const colorMode = useSelector(state => state.reducerSelectColourMode.colourMode);
  // const variant = useSelector(state => state.reducerSelectColourMode.variant);
  /** COLOR MODE CLOSED */

  /** FETCH ALBUM DATA "JSONAPI/UUID" */
  let { nid } = useParams();
  const dispatch = useDispatch();
  //console.log("uuid", id);
  useEffect(() => {
    dispatch(actionFetchAlbum(nid))
  }, [dispatch, nid])

  /** fetch albul tracks */
  const title = useSelector(state => state.reducerFetchAlbum.title);
  const body = useSelector(state => state.reducerFetchAlbum.body);
  const coverImage = useSelector(state => state.reducerFetchAlbum.coverImage);
  const tracks = useSelector(state => state.reducerFetchAlbum.tracks);
  const fetched = useSelector(state => state.reducerFetchAlbum.fetched);
  const buyFrom = useSelector(state => state.reducerFetchAlbum.buyFrom);
  const listen = useSelector(state => state.reducerFetchAlbum.listen);

  console.log("ALBUM", fetched && title[0], body, coverImage, tracks);

  function createMarkup(txt) {
    return {
      __html: txt
    };
  };

  /** play selected track */
  const [playTrack, setPlayTrack] = useState('');


  function stopTrack() {
    setPlayTrack('');
  }

  const playButtonStyle = {
    border: "1px solid #ccc",
    width: "30px",
    height: "30px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: "10px",
    borderRadius: "30px"
  }

  const playTrackStyle = {
    visibility: playTrack === '' ? 'hidden' : 'visible',
    opacity: playTrack === '' ? 0 : 1,
    transition: "visibility 0s, opacity 1s linear"
  }

  return (
    <div className="music-one">


      <div className={colorMode}>
        <ColourMode />
        <NavigationOne />
        <SocialMediaSticky />
        <div className="container pb-5">
          <div className="row">
            <div className="col d-flex justify-content-end">
              <CopyToClipBoard />
              <Link to={`/${pagelink.albums}`}><IconClose /></Link>
            </div>
          </div>
          <div className="row mt-1">
            <div className="col">
              <h1>{fetched && title[0].value}</h1>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6">
              <div>
                <img
                  style={{
                    width: "100%",
                    outline: "1px solid rgba(204,204,204,0.38)",
                    outlineOffset: "-10px"
                  }}
                  src={fetched && coverImage[0].url}
                  alt={fetched && coverImage[0].alt} />
              </div>
              <div className="mt-4 mb-5">
                <div dangerouslySetInnerHTML={createMarkup(fetched && body[0].value)} />
              </div>
            </div>
            <div className="col-lg-6">
              <ul className="list-group">
                {
                  fetched && buyFrom.map((item, index) => {
                    return <li className="list-group-item" key={index}>
                      <Link to={{ pathname: item.uri }} target="_blank">
                        {item.title}</Link></li>
                  })
                }
              </ul>
              <ul className="list-group mt-5 mb-2">
                {
                  fetched && listen.map((item, index) => {
                    return <li className="list-group-item" key={index}>
                      <Link to={{ pathname: item.uri }} target="_blank">
                        {item.title}</Link></li>
                  })
                }
              </ul>
              {/** TRACK  PLAYING COMPONENT */}

              <div style={playTrackStyle}>
                <PlayingTrack
                  track={playTrack}
                  stopTrack={stopTrack}
                />
              </div>

              <ul className="list-group mb-5 pb-5">
                {
                  fetched && tracks.map((item, index) => {
                    return <li
                      style={{ cursor: "pointer" }}
                      className="list-group-item d-flex"
                      key={index}
                      onClick={() => setPlayTrack(item.url)}>
                      <span style={playButtonStyle}><Play /></span>{item.description}</li>
                  })
                }
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Album

import React from 'react';
import { useDispatch } from 'react-redux';
import ListItem from './Play/ListItem';
import { ActionMusicThreePlayTrack } from '../Redux/ActionMusicThreePlayTrack';
import PlayAll from './Play/PlayAll';
import IconClose from '../../../components/Icon/IconClose';
import { Link } from 'react-router-dom';
import { pagelink } from '../../../PageLink';


function Mobile(props) {


  const { fetched, title, tracks, playAll, coverImage } = props;

  const dispatch = useDispatch();


  /** PLAY ALL BUTTON */
  const PlayAllButton = (playAll) => {
    return playAll ?
      <span className="btn"
        onClick={() => dispatch(ActionMusicThreePlayTrack(null, null, false, false))}> {/** trackUrl: null, track_id: null, play: false, playAll: false */}
        Stop
      </span>
      :
      <span className="btn"
        onClick={() => dispatch(ActionMusicThreePlayTrack(null, null, false, true))}>{/** trackUrl: null, track_id: null, play: false, playAll: true */}
        Play All
      </span>
  }

  const longPhotoStyle = {
    margin: "7px",
  }

  const imageStyle = {
    width: "100%",
    height: "250px",
    objectFit: "cover",
    border: "1px solid #000",
    outlineOffset: "-10px",
    outline: "1px solid rgba(255,255,255,0.25)",
    filter: "grayscale(1)",
  }



  return (
    <>
      <div className="container mb-5">


        {/** COLUMN CLOSE BUTTON */}
        <div className="row justify-content-end mb-2">
          <Link to={`/${pagelink.music}`}><IconClose /></Link>
        </div>

        <div className="row">
          <div className="col">
            {/** PLAY LIST TITLE */}
            <h3 style={{ marginLeft: "7px" }}>{fetched && title[0].value}</h3>
          </div>
        </div>


        {/** COLUMN IMAGE ONLY */}
        <div className="row justify-content-center mr-3">
          <div className="col">
            <div style={longPhotoStyle}>
              <img
                style={imageStyle}
                src={coverImage} alt={title} />
            </div>
          </div>
        </div>


        {/** COLUMN PLAY LIST */}
        <div className="row">
          <div className="col">
            {/** PLAY-ALL & STOP BUTTON */}
            {PlayAllButton(playAll)}
          </div>
        </div>


        <div className="row d-flex flex-wrap mr-3">
          <div className="col">
            {
              playAll
                ? /** playAll is true,  run PlayAll Function */
                <PlayAll
                  tracks={tracks}
                  playAllTracks={playAll} />
                : /** playAll is false, view Track List of the Album */
                fetched && tracks.map((item, index) => {
                  return <ListItem
                    title={item.description}
                    trackUrl={item.url}
                    index={index}
                  />
                })
            }
          </div>
        </div>


      </div>{/** container closed */}
    </>
  )
}

export default Mobile
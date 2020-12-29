import React from 'react';
import { useDispatch } from 'react-redux';
import ListItem from './Play/ListItem';
import { ActionMusicThreePlayTrack } from '../Redux/ActionMusicThreePlayTrack';
import PlayAll from './Play/PlayAll';
import IconClose from '../../../components/Icon/IconClose';
import { Link } from 'react-router-dom';
import { pagelink } from '../../../PageLink';
import Tablet from './Tablet';


function PlayTrack(props) {


  const { fetched, title, tracks, playAll } = props;

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



  return (
    <>
      <div className="container-fluid mb-5">

        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="d-flex w-100 justify-content-end">
              <Link to={`/${pagelink.music}`}><IconClose /></Link>
            </div>
          </div>
        </div>


        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            {/** PLAY LIST TITLE */}
            <h3 style={{ marginLeft: "7px" }}>
              {fetched && title[0].value}
            </h3>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12 col-sm-12 d-lg-none">
            <Tablet />
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            {/** PLAY-ALL & STOP BUTTON */}
            {PlayAllButton(playAll)}
          </div>
        </div>


        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            {
              playAll
                ? /** playAll is true,  run PlayAll Function */
                <PlayAll
                  tracks={tracks}
                  playAllTracks={playAll} />
                : /** playAll is false, view Track List of the Album */
                fetched && tracks.map((item, index) => {
                  return <ListItem
                    key={index}
                    title={item.description}
                    trackUrl={item.url}
                    index={index}
                  />
                })
            }
          </div>


        </div>
      </div>


    </>
  )
}

export default PlayTrack

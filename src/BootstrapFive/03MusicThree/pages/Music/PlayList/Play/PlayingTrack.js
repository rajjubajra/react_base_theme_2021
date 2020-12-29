import React from 'react';
import { useAudio } from 'react-use';
import PlayingTrackInProgress from './PlayingTrackInProgress';
import Play from './Play';
import Pause from './Pause';
import Stop from './Stop';
import { useDispatch } from 'react-redux';
import { ActionMusicThreePlayTrack } from '../../Redux/ActionMusicThreePlayTrack';



function PlayingTrack(props) {

  const dispatch = useDispatch()

  const { title, trackUrl, id, index } = props;

  // /** useAudio from react-use */
  const [audio, state, controls, ref] = useAudio({
    src: trackUrl,
    autoPlay: true,
  });

  // console.log("state", state);
  // console.log("ref", ref);
  // console.log("track", trackUrl);


  return (
    <>
      <div className="container-fluid">
        <div className={`row ${id === index ? '' : 'd-flex'}`}>

          {/** PLAYING TRACK TITLE  */}
          <div className="col-lg-6 col-md-6 col-sm-12">
            {title}
          </div>

          {/** PLAYING PROGRESS BAR AND TIME LEFT */}
          <div className="col-lg-4 col-md-4 col-sm-12">
            {audio}
            <p>Time Left: {Math.floor(state.duration - state.time)}</p>
            <PlayingTrackInProgress now={(state.time / state.duration) * 100} />
            <span className="small-font">
              <b>Listen to the full album on Spotify</b>
            </span>
          </div>

          {/** CONTROL BUTTONS */}
          <div className="col-lg-2 col-md-2 col-sm-12 mt-2 d-flex justify-content-around">
            <span onClick={controls.pause}><Pause /></span>
            <span onClick={controls.play}><Play /></span>
            <span
              onClick={() => dispatch(
                ActionMusicThreePlayTrack(null, null, false, false))}> {/** trackUrl: null, track_id: null, play:boolean , playAll: boolean */}
              <Stop />
            </span>
          </div>


        </div>
      </div>
    </>
  )
}

export default PlayingTrack
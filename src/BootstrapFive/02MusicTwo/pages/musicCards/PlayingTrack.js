import React from 'react';
import { useAudio } from 'react-use';
import PlayingTrackInProgress from './PlayingTrackInProgress';
import Play from './MusicPlayer/Play';
import Pause from './MusicPlayer/Pause';
// import Mute from './MusicPlayer/Mute';
// import Forward from './MusicPlayer/Forward';
// import Backward from './MusicPlayer/Backward';
// import VolumeUp from './MusicPlayer/VolumeUp';
// import VolumeDown from './MusicPlayer/VolumeDown';
import Stop from './MusicPlayer/Stop';
import { useDispatch, useSelector } from 'react-redux';
import { actionStopTheTrack } from '../Redux/actions/actionPlayTheTrack';




function PlayingTrack(props) {

  const dispatch = useDispatch()
  const variant = useSelector(state => state.reducerSelectColourMode.variant);

  //const [track, setTrack] = useState('');

  /** useAudio from react-use */
  const [audio, state, controls, ref] = useAudio({
    src: props.track,
    autoPlay: true,
  });

  console.log("state", state);
  console.log("ref", ref);
  console.log("track", props.track);


  return (
    <div

      className="playing-track mt-3">
      <ul className="list-group mb-2">

        <li
          style={{ background: variant === 'dark' ? "#66666687" : '' }}
          className="list-group-item">
          {/* { <audio src={track} preload='auto' controls></audio>} */}
          {audio}
          <div>Time Left: {Math.floor(state.duration - state.time)}</div>
          <PlayingTrackInProgress now={(state.time / state.duration) * 100} />
        </li>
        <li
          style={{ background: variant === 'dark' ? "#66666687" : '' }}
          className="list-group-item d-flex justify-content-between">
          <section>
            <span onClick={controls.pause}><Pause /></span>
            <span onClick={controls.play}><Play /></span>
            {/**
          <span onClick={controls.mute}><Mute /></span>
          <span onClick={controls.unmute}>Un-mute</span>
          */}
            {/**
          <span onClick={() => controls.volume(0.5)}><VolumeUp /></span>
          <span onClick={() => controls.volume(0.1)}><VolumeDown /></span>
          */}
            {/**         
          <span onClick={() => controls.seek(state.time - 5)}><Backward /></span>
          <span onClick={() => controls.seek(state.time + 5)}><Forward /></span>
           */}

            <span onClick={() => dispatch(actionStopTheTrack())}><Stop /></span>
          </section>
          <section>
            <span><b>Listen to the full album on Spotify</b></span>
          </section>

        </li>

      </ul>
    </div>
  )
}

export default PlayingTrack
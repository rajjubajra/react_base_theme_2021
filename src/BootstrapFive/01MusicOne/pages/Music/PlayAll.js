import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useAudio } from 'react-use';
import PlayingTrackInProgress from './PlayingTrackInProgress';



function PlayAll(props) {


  /** array index  */
  const [nextSong, setNextSong] = useState(0);

  /** set condition to change tracks index */
  const [autoPlayNext, setAutoPlayNext] = useState(false);

  /** set to false after complited playing 
   * all the tracks of the selected album*/
  const [autoPlayComplited, setAutoPlayComplited] = useState(false);

  /** fetched from REDUCERS */
  /** true or false : play all tracks */
  const playAllTracks = useSelector(state => state.reducerPlayAllTracks.playAllTracks);
  //const playAllTracks = props.playall
  /** array of the selected album tracks */
  const tracks = useSelector(state => state.reducerPlayAllTracks.tracks);


  /** useAudio */
  const [audio, state, controls, ref] = useAudio(
    {
      src: tracks[nextSong].url,
      autoPlay: true
    }
  );

  /** set next song index, 
   *  after compliting playing all tracks
   *  nextSong track set to 0 [plays loop back again]
   */
  function nextsong() {
    autoPlayComplited ? setNextSong(0) : setNextSong(song => song + 1)
  }


  useEffect(() => {
    /** tracks complited true or false */
    nextSong === (tracks.length - 1)
      ? setAutoPlayComplited(true)
      : setAutoPlayComplited(false);
  }, [nextSong, tracks.length])


  useEffect(() => {
    /** set condition to change tracks index */
    state.duration !== 0 && state.time !== 0 && state.time === state.duration && state.paused
      ? setAutoPlayNext(true)
      : setAutoPlayNext(false)
  }, [state.duration, state.paused, state.time])


  useEffect(() => {
    /** plays next track if autoPlayNext is true */
    if (autoPlayNext) {
      return nextsong()
    }
  }, [autoPlayNext])// do not add "nextsong" here



  // console.log("STATE", state);
  // console.log("control", controls);
  // console.log("ref", ref);
  // console.log("audio", audio);
  // console.log("track Ids", trackIds);
  //console.log('NEXT SONG', nextSong, "|", tracks.length - 1);
  //console.log('COMPLITED', autoPlayComplited);


  return (
    <div>
      <div>song:{nextSong}: {tracks[nextSong].url}</div>
      <div>Number of Songs: {tracks.length}</div>
      <pre> {JSON.stringify(tracks, null, 2)}</pre>
      <PlayingTrackInProgress now={(state.time / state.duration) * 100} />
      <div>

        {playAllTracks ? audio : ''}

        <pre>{JSON.stringify(state, null, 2)}</pre>
        <button onClick={controls.pause}>Pause</button>
        <button onClick={controls.play}>Play</button>
        <br />
        <button onClick={controls.mute}>Mute</button>
        <button onClick={controls.unmute}>Un-mute</button>
        <br />
        <button onClick={() => controls.volume(.1)}>Volume: 10%</button>
        <button onClick={() => controls.volume(.5)}>Volume: 50%</button>
        <button onClick={() => controls.volume(1)}>Volume: 100%</button>
        <br />
        <button onClick={() => controls.seek(state.time - 5)}>-5 sec</button>
        <button onClick={() => controls.seek(state.time + 5)}>+5 sec</button>
      </div>
    </div>
  )
}

export default PlayAll
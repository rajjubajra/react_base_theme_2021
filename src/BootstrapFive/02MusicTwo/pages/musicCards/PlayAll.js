import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useAudio } from 'react-use';
import Pause from './MusicPlayer/Pause';
import Play from './MusicPlayer/Play';
import Stop from './MusicPlayer/Stop';
import PlayingTrackInProgress from './PlayingTrackInProgress';
import { actionPlayAllTracks } from '../../pages/Redux/actions/actionPlayAllTracks';


function PlayAll() {

  const dispatch = useDispatch()

  /** background color */
  const variant = useSelector(state => state.reducerSelectColourMode.variant);

  /** fetched from REDUCERS */
  /** true or false : play all tracks */
  const playAllTracks = useSelector(state => state.reducerPlayAllTracks.playAllTracks);
  /** array of the selected album tracks */
  const tracks = useSelector(state => state.reducerPlayAllTracks.tracks);


  /** array index  */
  const [nextSong, setNextSong] = useState(0);

  /** useAudio */
  const [audio, state, controls, ref] = useAudio(
    {
      src: tracks[nextSong].url,
      autoPlay: true
    }
  );


  /** set condition to change tracks index */
  const [autoPlayNext, setAutoPlayNext] = useState(false);

  /** set to false after complited playing 
   * all the tracks of the selected album*/
  const [autoPlayComplited, setAutoPlayComplited] = useState(false);


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


  console.log("NEXT SONG", nextSong);
  console.log("autoPlaynext", autoPlayNext);


  return (
    <div className="playing-track mt-3">

      <div>Number of Songs: {tracks.length}</div>

      <div className="card mb-1">
        <div
          style={{ background: variant === 'dark' ? "#66666687" : '' }}
          className="card-body">
          <p>{tracks[nextSong].alt}</p>
          <PlayingTrackInProgress now={(state.time / state.duration) * 100} />
          <div>
            {playAllTracks ? audio : ''}
            <span onClick={controls.pause}><Pause /></span>
            <span onClick={controls.play}><Play /></span>
            <span onClick={() => dispatch(actionPlayAllTracks(tracks, false))}><Stop /></span>
          </div>
        </div>
      </div>
      <div>
        {
          tracks.length > 0 &&
          tracks.map(item => {
            const { alt, target_id } = item;
            return <div key={target_id} className="card mb-1">
              <div
                style={{ background: variant === 'dark' ? "#66666687" : '' }}
                className={`card-body`}>
                <span>{alt}</span>
              </div>
            </div>

          })
        }
      </div>

    </div>
  )
}

export default PlayAll
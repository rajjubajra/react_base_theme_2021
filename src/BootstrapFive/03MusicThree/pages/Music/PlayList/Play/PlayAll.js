import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useAudio } from 'react-use';
import Pause from './Pause';
import Play from './Play';
import Stop from './Stop';
import PlayingTrackInProgress from './PlayingTrackInProgress';
import { ActionMusicThreePlayTrack } from '../../Redux/ActionMusicThreePlayTrack';



function PlayAll(props) {

  const dispatch = useDispatch()



  /** playAllTracks : true or false : play all tracks */
  /** tracks : array of the selected album tracks */
  const { tracks, playAllTracks } = props;


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

      {/** NUMBER OF SONGS */}
      <div>Number of Songs: {tracks.length}</div>

      {/** PLAYING THE TRACK */}
      <div className="card mb-1">
        <div className="card-body d-flex justify-content-between">
          <div className="container-fluid">
            <div className="row">

              {/** Song Title */}
              <div className="col-lg-6 col-md-6 col-sm-12">
                <b>{tracks[nextSong].description}</b>
              </div>

              {/** Song Progress Bar and time left */}
              <div className="col-lg-4 col-md-4 col-sm-12">
                <p>Time Left: {Math.floor(state.duration - state.time)}</p>
                <PlayingTrackInProgress now={(state.time / state.duration) * 100} />
              </div>

              {/** Play Control buttons */}
              <div className="col-lg-2 col-md-2 col-sm-12 d-flex justify-content-around mt-2">
                {playAllTracks ? audio : ''}
                <span onClick={controls.pause}><Pause /></span>
                <span onClick={controls.play}><Play /></span>
                <span onClick={() => dispatch(ActionMusicThreePlayTrack(null, null, false, false))}><Stop /></span>
              </div>

            </div>
          </div>
        </div>
      </div>



      {/** LIST OF TRACKS */}
      <div>
        {
          tracks.length > 0 &&
          tracks.map((item, index) => {
            const { description, target_id } = item;
            return <div key={target_id} className="card mb-1">
              <div className={`card-body ${item.target_id === index ? '' : 'd-flex justify-content-between'}`}>
                <p>{description}</p>
                {index === nextSong ?
                  <p>{nextSong} playing...</p>
                  : ''}
              </div>
            </div>

          })
        }
      </div>

    </div>
  )
}

export default PlayAll
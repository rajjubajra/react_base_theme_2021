import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ActionMusicThreePlayTrack } from '../../Redux/ActionMusicThreePlayTrack';
import PlayingTrack from './PlayingTrack';
import Play from './Play';



function ListItem(props) {

  const dispatch = useDispatch();

  const variant = useSelector(state => state.reducerSelectColourMode.variant);

  const id = useSelector(state => state.ReducerMusicThreePlayTrack.id);

  const { title, index, trackUrl } = props;


  return (
    <div className="card mb-1 w-100">
      <div
        style={{ background: variant === 'dark' ? "#99999957" : '' }}
        className={`card-body ${id === index ? '' : 'd-flex justify-content-between'}`}>

        {id === index ?
          /** PLAYING TRACK */
          <PlayingTrack
            trackUrl={trackUrl}
            title={title}
            id={id}
            index={index}
          />
          :
          /** LIST THE TRACK */
          <>
            <p>{title}</p>
            <span
              onClick={() => dispatch(ActionMusicThreePlayTrack(trackUrl, index, true))}>
              <Play />
            </span>
          </>
        }

      </div>
    </div>
  )
}
export default ListItem
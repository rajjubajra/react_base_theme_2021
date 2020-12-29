import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { actionPlayTheTrack } from '../../pages/Redux/actions/actionPlayTheTrack';
import PlayingTrack from './PlayingTrack';
import Play from './MusicPlayer/Play';



function ListItem(props) {

  const dispatch = useDispatch();

  const variant = useSelector(state => state.reducerSelectColourMode.variant);
  const id = useSelector(state => state.reducerPlayTheTrack.id);
  //console.log('variant', variant);



  return (
    <div className="card mb-1">
      <div
        style={{ background: variant === 'dark' ? '#66666687' : '' }}
        className={`card-body ${props.id === id ? '' : 'd-flex justify-content-between'}`}>
        <span>{props.title}</span>
        <span>
          {props.id === id ? <PlayingTrack track={props.track} /> :
            <span onClick={() => dispatch(actionPlayTheTrack(props.track, props.id))}><Play /></span>
          }
        </span>
      </div>
    </div>

  )
}

export default ListItem
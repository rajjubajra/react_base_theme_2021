import React from 'react'
import { useSelector } from 'react-redux';

export default function PlayingTrackInProgress(props) {

  let now = props.now;

  const variant = useSelector(state => state.reducerSelectColourMode.variant);



  return (
    <>
      <div className="progress">
        <div
          variant={variant}
          className="progress-bar"
          role="progressbar"
          style={{ width: `${now.toFixed(0)}%` }}
          ariaValuenow={`${now.toFixed(0)}%`}
          ariaValuemin="0"
          ariaValuemax="100">
          {`${now.toFixed(0)}%`}</div>
      </div>
    </>
  )
}

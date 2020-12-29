import React from 'react';
import { useSelector } from 'react-redux';
import Desktop from './Desktop';
import Tablet from './Tablet';
import Mobile from './Mobile';


export const BoxSeven = () => {

  const title = "Music";

  const data = useSelector(state => state.ReducerMusicThree.payload);
  const dtLength = useSelector(state => state.ReducerMusicThree.dataLength);


  console.log("box seven", data);


  return (
    <>
      <div className="d-none d-lg-block d-xl-block w-100">

        <Desktop
          data={data}
          dtLength={dtLength}
          title={title} />

      </div>
      <div className="d-none d-md-block d-lg-none">
        <Tablet
          data={data}
          dtLength={dtLength}
          title={title} />
      </div>
      <div className="d-sm-block d-md-none d-lg-none d-xl-none">
        <Mobile
          data={data}
          dtLength={dtLength}
          title={title} />
      </div>
    </>
  )
}

export default BoxSeven;

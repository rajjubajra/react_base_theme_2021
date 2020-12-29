import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MusicCard from './MusicCard';
import { actionFetchData } from '../Redux/actions/actionFetchData';


function MusicCards() {

  const dispatch = useDispatch();
  const fetched = useSelector(state => state.reducerFetchData.fetched);
  const listOfAlbum = useSelector(state => state.reducerFetchData.payload);

  useEffect(() => {
    dispatch(actionFetchData());
  }, [dispatch])

  // console.log("Music Two Fetched", fetched);
  // console.log("music card page", listOfAlbum);


  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        {
          !fetched ? <div><h4>Loading...</h4></div> :
            listOfAlbum.map((item, index) => {
              return <div key={index} className="col-lg-4 col-md-4 col-sm-6 col-xs-6 col-9">
                <MusicCard
                  id={index}
                  img={item.url}
                  alt={item.alt}
                  title={item.alt}
                  text={item.body}
                />
              </div>
            })
        }
      </div>
    </div>
  )
}

export default MusicCards
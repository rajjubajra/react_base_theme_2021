import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ActionMusicThreePlayList } from '../Redux/ActionMusicThreePlayList';
import ColourMode from '../../../components/ColourMode/ColourMode';
import NavigationOne from '../../../components/header/NavigationOne/NavigationOne';
import SocialMediaSticky from '../../../components/socalMedia/SocialMediaSticky';
import PlayTrack from './PlayTrack';
import Desktop from './Desktop';




function PlayList() {

  /** dyanamic colour */
  const [className, setClassName] = useState('light');
  const [colourVariant, setColourVariant] = useState('light');
  const colorMode = useSelector(state => state.reducerSelectColourMode.colourMode);
  const variant = useSelector(state => state.reducerSelectColourMode.variant);
  //console.log(colorMode);

  useEffect(() => {
    setClassName(colorMode);
    setColourVariant(variant);
  }, [colorMode, variant])
  /** dynamic colour closed */




  /** DISPATCH nid[ node Id] in order to select the single Album detail */
  const dispatch = useDispatch();
  let { nid } = useParams();
  useEffect(() => {
    dispatch(ActionMusicThreePlayList(nid));
  }, [dispatch, nid])



  /** DATA FETCHED STATUS TRUE OR FALSE */
  const fetched = useSelector(state => state.ReducerMusicThreePlayList.fetched);
  /** TITLE OF THE SELECTED ALBUM */
  const title = useSelector(state => state.ReducerMusicThreePlayList.title);
  /** LIST OF TRACKS FROM THE SELECTED ALBUM */
  const tracks = useSelector(state => state.ReducerMusicThreePlayList.tracks);


  /** PlayAll: true or false */
  const playAll = useSelector(state => state.ReducerMusicThreePlayTrack.playAll);






  return (
    <div className="music-three">


      <div className={`${className}  min-vh-100`}>
        <ColourMode />
        {/** NAVIGATION */}
        <NavigationOne />
        {/** SOCIAL MEDIA */}
        <SocialMediaSticky />



        {
          fetched ?
            <>

              {/**  PLAY SELECTED TRACK  */}
              <div className="container">
                <div className="row">
                  <div className="col-lg-4 d-none d-lg-block d-xl-block">
                    <div className="d-flex justify-content-center w-100">
                      <Desktop />
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <PlayTrack
                      fetched={fetched}
                      title={title}
                      tracks={tracks}
                      playAll={playAll}
                    />
                  </div>
                </div>
              </div>



            </>

            : 'Loading...'

        }

      </div>

    </div>
  )
}

export default PlayList

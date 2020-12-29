import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ActionFetchNewsLetters } from '../NewsLetters/Redux/ActionFetchNewsLetters';
import NewsLetterView from './NewsLetterView';
import NewsLetterViewTablet from './NewsLetterViewTablet';


function NewsLetters() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ActionFetchNewsLetters());
  }, [dispatch])


  const news = useSelector(state => state.ReducerFetchNewsLetters.payload);
  const fetched = useSelector(state => state.ReducerFetchNewsLetters.fetched);

  console.log("NEWS LETTERS", news, fetched);

  const title = 'News Letter';


  return (
    <>
      <div className="d-none d-lg-block d-xl-block">

        <NewsLetterView
          title={title}
          fetched={fetched}
          news={news}
        />

      </div>
      <div className="d-block d-sm-block d-md-block d-lg-none d-xl-none">

        <NewsLetterViewTablet
          title={title}
          fetched={fetched}
          news={news}
        />

      </div>
    </>
  )

}
export default NewsLetters
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ActionFetchNewsLetters } from '../NewsLetters/Redux/ActionFetchNewsLetters';
import NewsLetterView from './NewsLetterView';


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
    <div>
      <NewsLetterView
        title={title}
        fetched={fetched}
        news={news}
      />

    </div>
  )

}
export default NewsLetters
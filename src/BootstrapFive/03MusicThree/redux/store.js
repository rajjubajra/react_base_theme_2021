import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
//import { reducerFetchData } from './reducers/ReducerFetchData';
import { reducerSelectColourMode } from './reducers/reducerSelectColourMode';
import { reducerFetchPhoto } from './reducers/reducerFetchPhoto';

import { reducerBlogSevenPages } from '../pages/News/BlogSeven/redux/reducerBlogSevenPages';
import { reducerBlogSevenSelectedDate } from '../pages/News/BlogSeven/redux/reducerBlogSevenSelectedDate';

import { reducerFetchTour } from '../pages/Tour/Redux/reducerFetchTour';
import { reducerFetchTourDetails } from '../pages/Tour/Redux/reducerFetchTourDetails';
import { reducerHideTour } from '../pages/Tour/Redux/reducerHideTour';

import { reducerFetchLatestNews } from '../pages/Home/Redux/reducerFetchLatestNews';
import { reducerFetchLandingPage } from '../pages/Home/Redux/reducerFetchLandingPage';
import { reducerFetchAbout } from '../pages/About/Redux/reducerFetchAbout';

import { reducerFetchMenu } from '../components/header/NavigationOne/Redux/reducerFetchMenu';

import { ReducerMusicThree } from '../pages/Music/Redux/ReducerMusicThree';
import { ReducerMusicThreePlayList } from '../pages/Music/Redux/ReducerMusicThreePlayList';
import { ReducerMusicThreePlayTrack } from '../pages/Music/Redux/ReducerMusicThreePlayTrack';



const reducer = combineReducers(
  {
    // reducerFetchData,
    reducerSelectColourMode,

    reducerFetchPhoto,

    reducerBlogSevenPages,
    reducerBlogSevenSelectedDate,

    reducerFetchTour,
    reducerFetchTourDetails,
    reducerHideTour,

    reducerFetchLatestNews,
    reducerFetchLandingPage,

    reducerFetchAbout,

    reducerFetchMenu,

    ReducerMusicThree,
    ReducerMusicThreePlayList,
    ReducerMusicThreePlayTrack,


  }
);

const middleware = applyMiddleware(thunk, createLogger());

export const store = createStore(reducer, middleware);

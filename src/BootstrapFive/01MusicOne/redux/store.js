import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
//import { reducerFetchData } from './reducers/ReducerFetchData';
import { reducerSelectColourMode } from './reducers/reducerSelectColourMode';
import { reducerFetchPhoto } from './reducers/ReducerFetchPhoto';

import { reducerFetchTracks } from '../pages/Music/Redux/reducerFetchTracks';
import { reducerFetchAlbum } from '../pages/Music/Redux/reducerFetchAlbum';

import { reducerBlogOnePages } from '../pages/News/BlogOne/redux/reducerBlogOnePages';

import { reducerFetchTour } from '../pages/Tour/Redux/reducerFetchTour';
import { reducerFetchTourDetails } from '../pages/Tour/Redux/reducerFetchTourDetails';

import { reducerFetchLatestNews } from '../pages/Home/Redux/reducerFetchLatestNews';
import { reducerFetchLandingPage } from '../pages/Home/Redux/reducerFetchLandingPage';
import { reducerFetchAbout } from '../pages/About/Redux/reducerFetchAbout';
import { reducerBlogOneSelectedDate } from '../pages/News/BlogOne/redux/reducerBlogOneSelectedDate';
import { reducerFetchMenu } from '../components/header/NavigationOne/Redux/reducerFetchMenu';

const reducer = combineReducers(
  {
    // reducerFetchData,
    reducerSelectColourMode,
    reducerFetchPhoto,
    reducerFetchTracks,
    reducerFetchAlbum,
    reducerBlogOnePages,
    reducerFetchTour,
    reducerFetchTourDetails,
    reducerFetchLatestNews,
    reducerFetchLandingPage,
    reducerFetchAbout,
    reducerBlogOneSelectedDate,
    reducerFetchMenu
  }
);

const middleware = applyMiddleware(thunk, createLogger());

export const store = createStore(reducer, middleware);

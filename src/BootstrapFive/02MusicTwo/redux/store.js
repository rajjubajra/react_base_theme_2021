import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { reducerSelectColourMode } from './reducers/reducerSelectColourMode';
import { reducerFetchPhoto } from './reducers/ReducerFetchPhoto';
import { reducerFetchAlbum } from '../pages/Redux/reducers/reducerFetchAlbum';
import { reducerFetchData } from '../pages/Redux/reducers/reducerFetchData';
import { reducerPagination } from '../pages/Redux/reducers/reducerPagination';
import { reducerPlayAllTracks } from '../pages/Redux/reducers/reducerPlayAllTracks';
import { reducerPlayTheTrack } from '../pages/Redux/reducers/reducerPlayTheTrack';
import { reducerFetchMenu } from '../components/header/NavigationOne/Redux/reducerFetchMenu';


const reducer = combineReducers(
  {
    reducerSelectColourMode,
    reducerFetchPhoto,
    reducerFetchAlbum,
    reducerFetchData,
    reducerPagination,
    reducerPlayAllTracks,
    reducerPlayTheTrack,
    reducerFetchMenu
  }
);

const middleware = applyMiddleware(thunk, createLogger());

export const store = createStore(reducer, middleware);

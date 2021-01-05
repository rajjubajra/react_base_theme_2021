import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
//import { reducerFetchData } from './reducers/ReducerFetchData';
import { reducerSelectColourMode } from './reducers/reducerSelectColourMode';
import { reducerFetchPhoto } from './reducers/ReducerFetchPhoto';

const reducer = combineReducers(
  {
    // reducerFetchData,
    reducerSelectColourMode,
    reducerFetchPhoto
  }
);

const middleware = applyMiddleware(thunk, createLogger());

export const store = createStore(reducer, middleware);

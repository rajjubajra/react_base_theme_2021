import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
//import { reducerFetchData } from './reducers/ReducerFetchData';
import { reducerSelectColourMode } from './reducers/reducerSelectColourMode';
import { reducerFetchPhoto } from './reducers/ReducerFetchPhoto';
/** FETCH NAVIGATION */
import { reducerFetchMenu } from '../components/header/NavigationOne/Redux/reducerFetchMenu';
/** FETCH BLOGS */
import { ReducerFetchBlog } from '../pages/Redux/ReducerFetchBlog';
/** READ MORE */
import { ReducerFetchReadMore } from '../pages/ReadMore/Redux/ReducerFetchReadMore';
/** PAGER RETURN PAGE */
import { ReducerPager } from '../redux/reducers/ReducerPager';
/** BLOG FOR SELECTED MONTH */
import { ReducerBlogSelectedDate } from '../pages/Redux/ReducerBlogSelectedDate';


const reducer = combineReducers(
  {
    // reducerFetchData,
    reducerSelectColourMode,
    reducerFetchPhoto,
    reducerFetchMenu,
    ReducerFetchBlog,
    ReducerFetchReadMore,
    ReducerPager,
    ReducerBlogSelectedDate,
  }
);

const middleware = applyMiddleware(thunk, createLogger());

export const store = createStore(reducer, middleware);
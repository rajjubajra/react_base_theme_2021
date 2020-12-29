import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
//import { reducerFetchData } from './reducers/ReducerFetchData';
import { reducerSelectColourMode } from './reducers/reducerSelectColourMode';
import { reducerFetchPhoto } from './reducers/ReducerFetchPhoto';

/** NAVIGATION */
import { reducerFetchMenu } from '../components/header/NavigationOne/Redux/reducerFetchMenu';

/** NEWS LETTERS */
import { ReducerFetchNewsLetters } from '../pages/NewsLetters/Redux/ReducerFetchNewsLetters';

/** POPULAR BLOG */
import { ReducerFetchPopularBlog } from '../pages/PopularBlog/Redux/ReducerFetchPopularBlog';

/** BLOG */
import { ReducerFetchBlog } from '../pages/Blog/Redux/ReducerFetchBlog';
/** READ MORE */
import { ReducerFetchReadMore } from '../pages/ReadMore/Redux/ReducerFetchReadMore';
/** Taxonomy */
import { ReducerFetchTaxonomy } from '../pages/Taxonomy/Redux/ReducerFetchTaxonomy';

/** Blog by Taxonomy */
import { ReducerFetchBlogByTaxonomy } from '../pages/Blog/Redux/ReducerFetchBlogByTaxonomy';

import { ReducerBlogSelectedDate } from '../pages/Blog/Redux/ReducerBlogSelectedDate';

import { ReducerSearchForm } from '../pages/Blog/Redux/ReducerSearchForm';

import { ReducerPager } from './reducers/ReducerPager';

const reducer = combineReducers(
  {
    reducerSelectColourMode,
    reducerFetchPhoto,
    reducerFetchMenu,
    ReducerFetchNewsLetters,
    ReducerFetchPopularBlog,
    ReducerFetchBlog,
    ReducerFetchBlogByTaxonomy,
    ReducerFetchReadMore,
    ReducerFetchTaxonomy,
    ReducerBlogSelectedDate,
    ReducerSearchForm,
    ReducerPager,
  }
);

const middleware = applyMiddleware(thunk, createLogger());

export const store = createStore(reducer, middleware);
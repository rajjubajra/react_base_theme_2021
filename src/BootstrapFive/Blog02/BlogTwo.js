import React from 'react';
import './BlogTwo.scss';
import { Provider } from 'react-redux'
import { store } from './redux/store';
import RoutePages from './pages/RoutePages';


function BlogTwo() {
  return (
    <Provider store={store}>
      <RoutePages />
    </Provider>
  )
}

export default BlogTwo
import React from 'react';
import './BlogOne.scss';
import { Provider } from 'react-redux'
import { store } from './redux/store';
import RoutePages from './pages/RoutePages';


function BaseOne() {
  return (
    <Provider store={store}>
      <RoutePages />
    </Provider>
  )
}

export default BaseOne
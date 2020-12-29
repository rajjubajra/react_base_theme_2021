import React from 'react';
import './BlogFour.scss';
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
import React from 'react';
import './BusinessTwo.scss';
import { Provider } from 'react-redux'
import { store } from './redux/store';
import RoutePages from './pages/RoutePages';


function BaseTheme() {
  return (
    <Provider store={store}>
      <RoutePages />
    </Provider>
  )
}

export default BaseTheme

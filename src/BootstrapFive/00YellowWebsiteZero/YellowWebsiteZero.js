import React from 'react';
import './YellowWebsiteZero.scss';
import { Provider } from 'react-redux'
import { store } from './redux/store';
import RoutePages from './pages/RoutePages';


function YellowWebsiteZero() {
  return (
    <Provider store={store}>
      <RoutePages />
    </Provider>
  )
}

export default YellowWebsiteZero

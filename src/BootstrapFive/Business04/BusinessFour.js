import React from 'react';
import './BusinessFour.scss';
import { Provider } from 'react-redux'
import { store } from './redux/store';
import RoutePages from './pages/RoutePages';


function BusinessFour() {
  return (
    <Provider store={store}>
      <RoutePages />
    </Provider>
  )
}

export default BusinessFour

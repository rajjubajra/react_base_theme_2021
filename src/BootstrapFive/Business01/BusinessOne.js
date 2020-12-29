import React from 'react';
import './BusinessOne.scss';
import { Provider } from 'react-redux'
import { store } from './redux/store';
import RoutePages from './pages/RoutePages';


function BusinessOne() {
  return (
    <Provider store={store}>
      <RoutePages />
    </Provider>
  )
}

export default BusinessOne

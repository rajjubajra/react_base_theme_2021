import React from 'react';
import './PhotographyOne.scss';
import { Provider } from 'react-redux'
import { store } from './redux/store';
import RoutePages from './pages/RoutePages';


function PhotographyOne() {
  return (
    <Provider store={store}>
      <RoutePages />
    </Provider>
  )
}

export default PhotographyOne

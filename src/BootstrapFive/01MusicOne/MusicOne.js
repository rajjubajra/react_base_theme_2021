import React from 'react';
import './MusicOne.scss';
import { Provider } from 'react-redux'
import { store } from './redux/store';
import RoutePages from './pages/RoutePages';


function MusicOne() {
  return (
    <Provider store={store}>
      <RoutePages />
    </Provider>
  )
}

export default MusicOne

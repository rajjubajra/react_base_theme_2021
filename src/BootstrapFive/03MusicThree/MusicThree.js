import React from 'react';
import './MusicThree.scss';
import { Provider } from 'react-redux'
import { store } from './redux/store';
import RoutePages from './pages/RoutePages';


function MusicThree() {
  return (
    <Provider store={store}>
      <RoutePages />
    </Provider>
  )
}

export default MusicThree
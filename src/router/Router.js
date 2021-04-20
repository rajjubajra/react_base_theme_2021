import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

/** ROOT STYLE FILE */
import './Router.scss';

import MusicOne from '../BootstrapFive/01MusicOne/MusicOne';
import Copyright from '../BootstrapFive/Copyright/Copyright';



const Router = () => {

  return (
    <BrowserRouter basename={`/react/b4music-one`}>
      <Switch>
        <MusicOne />
      </Switch>
      <Copyright />
    </BrowserRouter>
  )
}

export default Router

import React from 'react';
import { Switch } from 'react-router-dom';
import MusicOne from '../BootstrapFive/01MusicOne/MusicOne';
import MusicTwo from '../BootstrapFive/02MusicTwo/MusicTwo';
import MusicThree from '../BootstrapFive/03MusicThree/MusicThree';

function MusicRoute() {
  return (
    <>
      <Switch>
        <MusicOne />
      </Switch>

      <Switch>
        <MusicTwo />
      </Switch>

      <Switch>
        <MusicThree />
      </Switch>

    </>
  )
}

export default MusicRoute

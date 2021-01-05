import React from 'react';
import { Switch } from 'react-router-dom';
import PhotographyOne from '../BootstrapFive/Photography01/PhotographyOne';

function PhotographyRoute() {
  return (
    <>
      <Switch>
        <PhotographyOne />
      </Switch>
    </>
  )
}

export default PhotographyRoute

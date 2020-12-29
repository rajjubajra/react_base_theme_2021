import React from 'react';
import { Switch } from 'react-router-dom';
import BusinessOne from '../BootstrapFive/Business01/BusinessOne';
import BusinessTwo from '../BootstrapFive/Business02/BusinessTwo';
import BusinessThree from '../BootstrapFive/Business03/BusinessThree';
import BusinessFour from '../BootstrapFive/Business04/BusinessFour';

function BusinessRoute() {
  return (
    <>
      <Switch>
        <BusinessOne />
      </Switch>

      <Switch>
        <BusinessTwo />
      </Switch>


      <Switch>
        <BusinessThree />
      </Switch>

      <Switch>
        <BusinessFour />
      </Switch>




    </>
  )
}

export default BusinessRoute

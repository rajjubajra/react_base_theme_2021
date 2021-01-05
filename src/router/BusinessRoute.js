import React from 'react';
import { Switch } from 'react-router-dom';
import BusinessOne from '../BootstrapFive/Business01/BusinessOne';
import BusinessTwo from '../BootstrapFive/Business02/BusinessTwo';
import BusinessThree from '../BootstrapFive/Business03/BusinessThree';


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






    </>
  )
}

export default BusinessRoute

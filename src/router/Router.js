import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

/** ROOT STYLE FILE */
import './Router.scss';

/** COMPONENTS */
import Websites from '../BootstrapFive/Websites';
import BaseTheme from '../BootstrapFive/BaseTheme/BaseTheme';

import YellowWebSiteZero from '../BootstrapFive/00YellowWebsiteZero/YellowWebsiteZero';

import Copyright from '../BootstrapFive/Copyright/Copyright';
import MusicRoute from './MusicRoute';
import BlogRoute from './BlogRoute';
import BusinessRoute from './BusinessRoute';


const Router = () => {



  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Websites} />
      </Switch>

      <Switch>
        <BaseTheme />
      </Switch>

      <Switch>
        <YellowWebSiteZero />
      </Switch>


      <MusicRoute />
      <BlogRoute />
      <BusinessRoute />





      <Copyright />

    </BrowserRouter>
  )
}

export default Router

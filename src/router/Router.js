import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

/** ROOT STYLE FILE */
import './Router.scss';

/** TEST */
import Test from '../Test/Test';

/** COMPONENTS */
import Websites from '../BootstrapFive/Websites';
import BaseTheme from '../BootstrapFive/BaseTheme/BaseTheme';



import Copyright from '../BootstrapFive/Copyright/Copyright';
import MusicRoute from './MusicRoute';
import BlogRoute from './BlogRoute';
import BusinessRoute from './BusinessRoute';
import PhotographyRoute from './PhotographyRoute';
import YellowWebsiteRoute from './YellowWebsiteRoute';


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
        <Route exact path="/test" component={Test} />
      </Switch>


      <YellowWebsiteRoute />
      <MusicRoute />
      <BlogRoute />
      <BusinessRoute />
      <PhotographyRoute />





      <Copyright />

    </BrowserRouter>
  )
}

export default Router

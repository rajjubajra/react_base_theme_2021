import React from 'react';
import { Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import { pagelink } from '../PageLink';
import MusicCardDetail from './musicCards/MusicCardDetail';
import ResponsiveView from './ResponsiveView/ResponsiveView';
import IframeView from './ResponsiveView/IframeView';


function RoutePages() {
  return (
    <>
      <Route exact path={`/${pagelink.home}`} component={Home} />
      <Route exact path={`/${pagelink.about}`} component={About} />
      <Route exact path={`/${pagelink.contact}`} component={Contact} />
      <Route exact path={`/${pagelink.playAll}/:id`} component={MusicCardDetail} />
      <Route exact path={`/${pagelink.responsiveView}`} component={ResponsiveView} />
      {/** only for Iframe source view
       * in order to disply on Responsive device view
       */}
      <Route exact path={`/${pagelink.iframeVeiw}`} component={IframeView} />
    </>
  )
}

export default RoutePages

import React from 'react';
import { Route } from 'react-router-dom';
import Home from './Home';
import About from './About/About';
import Contact from './Contact';
import Themes from './GalleryHorizontal/Themes/Themes';
import Clients from './GalleryHorizontal/Themes/Clients';
import Redirect from './Redirect';
import { pagelink } from '../PageLink';


function RoutePages() {
  return (
    <>
      <Route exact path={`/${pagelink.home}`} component={Home} />
      <Route exact path={`/${pagelink.about}`} component={About} />
      <Route exact path={`/${pagelink.contact}`} component={Contact} />
      <Route exact path={`/${pagelink.themes}`} component={Themes} />
      <Route exact path={`/${pagelink.clients}`} component={Clients} />
      <Route exact path={`/${pagelink.redirect}`} component={Redirect} />
    </>
  )
}

export default RoutePages

import React from 'react';
import { Route } from 'react-router-dom';
import Home from './Home';
import About from './About/About';
import Contact from './Contact/Contact';
import Blog from './Blog/Blog';
import BlogByTaxonomy from './Blog/BlogByTaxonomy';
import ReadMore from './ReadMore/ReadMore';
import { pagelink } from '../PageLink';
import BlogSearch from './Blog/BlogSearch';
import ResponsiveView from './ResponsiveView/ResponsiveView';
import IframeView from './ResponsiveView/IframeView';


function RoutePages() {
  return (
    <>
      <Route exact path={`/${pagelink.home}`} component={Home} />
      <Route exact path={`/${pagelink.about}`} component={About} />
      <Route exact path={`/${pagelink.blogs}`} component={Blog} />
      <Route exact path={`/${pagelink.blogByTaxonomy}/:tid`} component={BlogByTaxonomy} />
      <Route exact path={`/${pagelink.contact}`} component={Contact} />

      <Route exact path={`/${pagelink.readMore}/:nid`} component={ReadMore} />
      <Route exact path={`/${pagelink.search}`} component={BlogSearch} />

      <Route exact path={`/${pagelink.responsiveView}`} component={ResponsiveView} />
      {/** only for Iframe source view
       * in order to disply on Responsive device view
       */}
      <Route exact path={`/${pagelink.iframeView}`} component={IframeView} />

    </>
  )
}

export default RoutePages
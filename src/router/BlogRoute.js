import React from 'react';
import { Switch } from 'react-router-dom';
import BlogOne from '../BootstrapFive/Blog01/BlogOne';
import BlogTwo from '../BootstrapFive/Blog02/BlogTwo';
import BlogThree from '../BootstrapFive/Blog03/BlogThree';
import BlogFour from '../BootstrapFive/Blog04/BlogFour';


function BlogRoute() {
  return (
    <>
      <Switch>
        <BlogOne />
      </Switch>

      <Switch>
        <BlogTwo />
      </Switch>

      <Switch>
        <BlogThree />
      </Switch>

      <Switch>
        <BlogFour />
      </Switch>
    </>
  )
}

export default BlogRoute

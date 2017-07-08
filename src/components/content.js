import React from 'react';
import { Route, Switch } from 'react-router';
import classes from './content.css';
import LandingPage from './landing-page';
import LatestPosts from './latest-posts';
import NotFoundPage from './not-found-page';

const Content = () => (
  <div className={classes.container}>
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path="/posts" component={LatestPosts} />
      <Route component={NotFoundPage} />
    </Switch>
  </div>
);

export default Content;

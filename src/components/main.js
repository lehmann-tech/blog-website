import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Sidebar from './sidebar/sidebar';
import Content from './content';
import classes from './main.css';

const Main = () => (
  <BrowserRouter>
    <div className={classes.container}>
      <Sidebar />
      <Route path="/" component={Content} />
    </div>
  </BrowserRouter>
);

export default Main;

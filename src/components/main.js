import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Sidebar from './sidebar/sidebar';
import Content from './content';
import classes from './main.css';

const Main = () => (
  <div className={classes.container}>
    <Sidebar />
    <BrowserRouter>
      <div>
        <Route path="/" component={Content} />
      </div>
    </BrowserRouter>
  </div>
);

export default Main;

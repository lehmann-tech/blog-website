import React from 'react';

import Sidebar from './sidebar';
import Content from './content';
import classes from './main.css';

const Main = () => (
  <div className={classes.container}>
    <Sidebar/>
    <Content/>
  </div>
);

export default Main;

import React from 'react';
import classes from './collapsed-sidebar.css';

const CollapsedSidebar = ({expand}) => (
  <div className={classes.container}>
    <a href="#" onClick={expand}>≡</a>
  </div>
);

export default CollapsedSidebar;

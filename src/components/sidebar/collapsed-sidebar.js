import React from 'react';
import classes from './collapsed-sidebar.css';

const CollapsedSidebar = ({expand}) => (
  <div className={classes.container}>
    <button onClick={expand}>≡</button>
  </div>
);

export default CollapsedSidebar;

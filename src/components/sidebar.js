import React from 'react';
import classes from './sidebar.css';

const Sidebar = () => (
  <div className={classes.container}>
    <ul>
      <li className={classes.links}>
        <a href="#">link 1</a>
        <a href="#">link 2</a>
        <a href="#">link 3</a>
        <a href="#">link 4</a>
        <a href="#">link 5</a>
        <a href="#">link 6</a>
      </li>
    </ul>
  </div>
);

export default Sidebar;

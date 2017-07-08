import React from 'react';
import classes from './expanded-sidebar.css';

const ExpandedSidebar = ({collapse}) => (
  <div className={classes.container}>
    <button onClick={collapse}>≡</button>
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

export default ExpandedSidebar;

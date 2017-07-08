import React from 'react';
import { Link } from 'react-router-dom';
import classes from './expanded-sidebar.css';

const ExpandedSidebar = ({collapse}) => (
  <div className={classes.container}>
    <button onClick={collapse}>≡</button>
    <ul>
      <li className={classes.links}>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/posts">Latest posts</Link>
      </li>
    </ul>
  </div>
);

export default ExpandedSidebar;

import React from 'react';
import classes from './post.css';

const Post = ({ title, author, date, body }) => (
  <div>
    <h2>{title}</h2>
    <p className={classes.byline}>Written by {author} at {date}</p>
  </div>
);

export default Post;

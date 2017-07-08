import React from 'react';
import classes from './post-preview.css';

const PostPreview = ({ title, body }) => (
  <div>
    <h3 className={classes.title}>{title}</h3>
    <p className={classes.body}>{body.substring(0, 300)}…</p>
  </div>
);

export default PostPreview;

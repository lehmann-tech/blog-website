import React from 'react';
import PostFeed from './post-feed';
import posts from '../sample-data/posts';

const LatestPosts = () => (
  <div>
    <h1>Latest posts</h1>
    <PostFeed posts={posts.slice(0, 5)}/>
  </div>
);

export default LatestPosts;

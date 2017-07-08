import React from 'react';
import PostPreview from './post-preview';

const PostFeed = ({ posts }) => (
  <div>
    {posts.map(post => <PostPreview key={post.id} {...post} />)}
  </div>
);

export default PostFeed;

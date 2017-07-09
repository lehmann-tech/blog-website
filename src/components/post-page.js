import React from 'react';
import { Redirect } from 'react-router-dom';

import posts from '../sample-data/posts';
import PostPreview from './post-preview';
import Post from './post';

const PostPage = ({ match }) => {
  const postId = Number(match.params.id);

  const post = posts.find(post => post.id === postId);

  console.log(posts);

  if (post == null) {
    return (
      <Redirect to="/not-found" />
    );
  }

  return (
    <div>
      <Post {...post} />
    </div>
  );
};

export default PostPage;

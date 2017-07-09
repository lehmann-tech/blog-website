import React from 'react';
import { Redirect } from 'react-router-dom';

import posts from '../sample-data/posts';
import Post from './post';

const PostPage = ({ match: { params: { id } } } ) => {
  const postId = Number(id);

  const post = posts.find(post => post.id === postId);

  if (post == null) {
    return (
      <Redirect to="/not-found" />
    );
  }

  return <Post {...post} />;
};

export default PostPage;

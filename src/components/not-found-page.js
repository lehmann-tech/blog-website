import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <div>
    <h1>Oops, that page doesn't exist</h1>
    <Link to="/">Take me back</Link>
  </div>
);

export default NotFoundPage;

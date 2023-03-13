import React from 'react';
import './app-header.sass';

const AppHeader = ({allPosts, liked}) => {
  return (
    <div className="container">
      <div className="col-md-8 offset-md-2">
        <div className="app-header d-flex">
          <h1>RJ</h1>
          <h2>{allPosts} posts, liked {liked}</h2>
        </div>
      </div>
    </div>
  );
}

export default AppHeader;

import React from 'react';
import PostListItem from '../post-list-item';
import './post-list.sass';

const PostList = ({posts, onDelete, onToggleImportant, onToggleLiked}) => {
  const elements = posts.map((item) => {
    const {id, ...itemProps} = item;

    return (
      <li key={id} className="list-group-item">
        <PostListItem
          {...itemProps}
          onDelete={() => onDelete(id)}
          onToggleImportant={() => onToggleImportant(id)}
          onToggleLiked={() => onToggleLiked(id)}
        />
      </li>
    );
  });

  return (
    <div className="container">
      <div className="col-md-8 offset-md-2">
        <ul className="app-list list-group">{elements}</ul>
      </div>
    </div>
  );
}

export default PostList;

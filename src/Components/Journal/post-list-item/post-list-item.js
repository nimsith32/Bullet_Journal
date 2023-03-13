import React from 'react';
import './post-list-item.sass';

export default class PostListItem extends React.Component {
  render() {
    const {label, onDelete, onToggleImportant, onToggleLiked, important, like} = this.props;
    let classNames = 'app-list-item d-flex justify-content-between';
    if (important) classNames += ' important';
    if (like) classNames += ' liked';

    return (
      <div className={classNames}>
        <span
          className="app-list-item-label"
          onClick={onToggleLiked}
        >
          { label }
        </span>
        <div className="d-flex justify-content-center align-items-center">
          <button
            type="button"
            className="btn-star btn-small"
            onClick={onToggleImportant}
          >
            <i className="bi bi-star-fill"></i>
          </button>
          <button
            type="button"
            className="btn-trash btn-small"
            onClick={onDelete}
          >
            <i className="bi bi-trash"></i>
          </button>
          <i className="bi bi-heart-fill"></i>
        </div>
      </div>
    );
  }
}

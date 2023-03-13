import React from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';
import './app.sass';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {id: 1, label: 'This is', important: false, like: false},
        {id: 2, label: 'a simple', important: false, like: false},
        {id: 3, label: 'React journal app', important: false, like: false}
      ],
      term: '',
      filter: 'all'
    };
    this.deleteItem = this.deleteItem.bind(this);
    this.addItem = this.addItem.bind(this);
    this.onToggleImportant = this.onToggleImportant.bind(this);
    this.onToggleLiked = this.onToggleLiked.bind(this);
    this.onUpdateSearch = this.onUpdateSearch.bind(this);
    this.onFilterSelect = this.onFilterSelect.bind(this);
    this.maxId = 4;
  }

  deleteItem(id) {
    this.setState(({data}) => {
      const index = data.findIndex(elem => elem.id === id);
      const newArr = [...data.slice(0, index), ...data.slice(index + 1)];

      return {data: newArr};
    });
  }

  addItem(body) {
    const newItem = {
      label: body, important: false, id: this.maxId++
    }
    this.setState(({data}) => {
      const newArray = [...data, newItem];
      return {data: newArray};
    });
  }

  onToggleImportant(id) {
    this.setCustomState(id, 'important');
  }

  onToggleLiked(id) {
    this.setCustomState(id, 'like');
  }

  setCustomState(id, param) {
    this.setState(({data}) => {
      const index = data.findIndex(elem => elem.id === id);
      const old = data[index];
      const newItem = {...old, [param]: !old[param]};
      const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

      return {data: newArr};
    });
  }

  searchPost(items, term) {
    if (term.length === 0) {
      return items;
    }

    return items.filter((item) => {
      return item.label.indexOf(term) > -1;
    });
  }

  filterPost(items, filter) {
    if (filter === 'liked') {
      return items.filter(item => item.like);
    } else {
      return items;
    }
  }

  onUpdateSearch(term) {
    this.setState({term});
  }

  onFilterSelect(filter) {
    this.setState({filter});
  }

  render () {
    const {data, term, filter} = this.state;
    const allPosts = data.length;
    const liked = data.filter(item => item.like).length;
    const visiblePosts = this.filterPost(this.searchPost(data, term), filter);

    return (
      <div className="app">
        <AppHeader
          allPosts={allPosts}
          liked={liked}
        />
        <div className="container">
          <div className="col-md-8 offset-md-2">
            <div className="search-panel d-flex">
              <SearchPanel onUpdateSearch={this.onUpdateSearch} />
              <PostStatusFilter
                filter={filter}
                onFilterSelect={this.onFilterSelect}
              />
            </div>
          </div>
        </div>
        <PostList
          posts={visiblePosts}
          onDelete={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleLiked={this.onToggleLiked}
        />
        <PostAddForm onAdd={this.addItem} />
      </div>
    );
  }
}

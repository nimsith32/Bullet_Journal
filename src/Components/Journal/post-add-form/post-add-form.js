import React from 'react';
import './post-add-form.sass';

export default class PostAddForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
    this.onValueChange = this.onValueChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onValueChange(e) {
    this.setState({text: e.target.value});
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.onAdd(this.state.text);
    this.setState({text: ''});
  }

  render() {
    return (
      <div className="container">
        <div className="col-md-8 offset-md-2">
          <form
            className="bottom-panel d-flex"
            onSubmit={this.onSubmit}
          >
            <input
              type="text"
              className="form-control new-post-label"
              placeholder="Post title"
              onChange={this.onValueChange}
              value={this.state.text}
            />
            <button
              type="submit"
              className="btn btn-outline-secondary"
            >
              Add
            </button>
          </form>
        </div>
      </div>
    );
  }
}

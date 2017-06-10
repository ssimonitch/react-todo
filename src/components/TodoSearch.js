import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TodoSearch extends Component {

  handleChange(e) {
    let isChecked = e.target.checked;
    this.props.onFilter(isChecked);
  }

  handleSearch () {
    let searchText = this.textInput.value;
    this.props.onSearch(searchText);
  }

  render() {
    return (
      <div>
        <div>
          <input
            type="search"
            placeholder="Search todos"
            ref={input => this.textInput = input}
            onChange={this.handleSearch.bind(this)} />
          </div>
        <div>
          <label>
            <input id="filter" type="checkbox" onChange={this.handleChange.bind(this)} />
            Show completed todos
          </label>
        </div>
      </div>
    );
  }
}

TodoSearch.propTypes = {
  onFilter: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired
};

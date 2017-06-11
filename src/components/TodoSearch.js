import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import * as actions from '../actions/actions';

export class TodoSearch extends Component {

  // handleChange(e) {
  //   let isChecked = e.target.checked;
  //   this.props.onFilter(isChecked);
  // }
  //
  // handleSearch () {
  //   let searchText = this.textInput.value;
  //   this.props.onSearch(searchText);
  // }

  render() {

    const { dispatch, showCompleted, searchText } = this.props;

    return (
      <div className="container__header">
        <div>
          <input
            type="search"
            placeholder="Search todos"
            ref={input => this.textInput = input}
            onChange={() => {
              let searchText = this.textInput.value;
              dispatch(actions.setSearchText(searchText));
            }}
            value={searchText}
          />
          </div>
        <div>
          <label>
            <input id="filter" type="checkbox" onChange={() => {
              dispatch(actions.toggleShowCompleted());
            }}
            checked={showCompleted}
            />
            Show completed todos
          </label>
        </div>
      </div>
    );
  }
}

TodoSearch.propTypes = {
  dispatch: PropTypes.func,
  showCompleted: PropTypes.bool,
  searchText: PropTypes.string
};

const mapStateToProps = (state) => {
  return {
    showCompleted: state.showCompleted,
    searchText: state.searchText
  };
};

export default connect(mapStateToProps)(TodoSearch);

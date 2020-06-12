import React, { Component } from "react";
import PropTypes from "prop-types";

class Search extends Component {
  state = {
    text: "",
  };

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired,
  };

  render() {
    const handleChange = (e) => {
      this.setState({ [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      if (this.state.text === "") {
        this.props.setAlert("Please search a valid name", "light");
      } else {
        this.props.searchUsers(this.state.text);
        this.setState({ text: "" });
      }
    };

    return (
      <div>
        <form onSubmit={handleSubmit} className="form">
          <input
            type="text"
            name="text"
            placeholder="Search user here"
            value={this.state.text}
            onChange={handleChange}
          />
          <button className="btn waves-effect waves-light" type="submit">
            Search
            <i className="material-icons right">search</i>
          </button>
        </form>
        {this.props.showClear && (
          <button
            className="btn waves-effect waves-light btn-large"
            onClick={this.props.clearUsers}
          >
            Clear
            <i className="material-icons right">delete</i>
          </button>
        )}
      </div>
    );
  }
}

export default Search;

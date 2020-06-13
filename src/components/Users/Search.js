import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import GithubContext from "../../context/github/githubContext";

const Search = ({ setAlert }) => {
  const githubContext = useContext(GithubContext);

  const [text, setText] = useState("");

  const handleChange = (e) => setText(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      setAlert("Please search a valid name", "light");
    } else {
      githubContext.searchUsers(text);
      setText(text);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          name="text"
          placeholder="Search user here"
          value={text}
          onChange={handleChange}
        />
        <button className="btn waves-effect waves-light" type="submit">
          Search
          <i className="material-icons right">search</i>
        </button>
      </form>
      {githubContext.users.length > 0 && (
        <button
          className="btn waves-effect waves-light btn-large"
          onClick={githubContext.clearUsers}
        >
          Clear
          <i className="material-icons right">delete</i>
        </button>
      )}
    </div>
  );
};

Search.propTypes = {
  setAlert: PropTypes.func.isRequired,
};
export default Search;

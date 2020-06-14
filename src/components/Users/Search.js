import React, { useState, useContext } from "react";

import GithubContext from "../../context/github/githubContext";
import AlertContext from "../../context/alert/AlertContext";

const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);

  const [text, setText] = useState("");

  const handleChange = (e) => setText(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      alertContext.setAlert("Please search a valid name", "light");
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

export default Search;

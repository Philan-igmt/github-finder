import React, { Fragment, useEffect, useContext } from "react";
import Spinner from "../layout/Spinner";
import Repos from "../repos/Repos";
import { Link } from "react-router-dom";
import GithubContext from "../../context/github/githubContext";

const User = ({ match }) => {
  const githubContext = useContext(GithubContext);

  const { getUser, loading, user, repos, getUserRepos } = githubContext;

  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
    // eslint-diable-next-line
  }, []);

  const {
    name,
    avatar_url,
    location,
    company,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;

  if (loading) return <Spinner />;

  return (
    <Fragment>
      <Link to="/" className="btn btn-light">
        {" "}
        <i className="large material-icons left">fast_rewind</i>Back to search
      </Link>
      Hireable:{""}
      {hireable ? (
        <i className="fas fa-check green-text" />
      ) : (
        <i className="fas fa-times-circle text-danger" />
      )}
      <div className="card grid-2">
        <div className="all-center">
          <img
            src={avatar_url}
            className="round-image"
            alt=""
            style={{ width: "150px" }}
          />
          <h1>{name}</h1>
          <p>location:{location}</p>
        </div>
        <div>
          {bio && (
            <Fragment>
              <h3>Bio</h3>
              <p>{bio}</p>
            </Fragment>
          )}

          <a href={html_url} className="btn btn-dark my-1">
            <i className="fab fa-github-square"></i>Github profile
          </a>
          <ul>
            <li>
              {login && (
                <Fragment>
                  <strong>Username:</strong>
                  {login}
                </Fragment>
              )}
            </li>
            <li>
              {company && (
                <Fragment>
                  <strong>Company:</strong>
                  {company}
                </Fragment>
              )}
            </li>
            <li>
              {blog && (
                <Fragment>
                  <strong>Blog:</strong>
                  {blog}
                </Fragment>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className="cardr">
        <div className="row">
          <div className="col s6 m3">
            followers:<span className="btn btn-floating">{followers}</span>
          </div>
          <div className="col s6 m3">
            following:<span className="btn btn-floating">{following}</span>
          </div>
          <div className="col s6 m3">
            Public Repos:
            <span className="btn btn-floating">{public_repos}</span>
          </div>
          <div className="col s6 m3">
            Public Gists:
            <span className="btn btn-floating">{public_gists}</span>
          </div>
        </div>
      </div>
      <Repos repos={repos} />
    </Fragment>
  );
};
export default User;

import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class Nav extends Component {
  componentDidMount() {
    const M = window.M;
    document.addEventListener("DOMContentLoaded", function () {
      var elems = document.querySelectorAll(".fixed-action-btn");
      var instances = M.FloatingActionButton.init(elems, {});
    });
  }

  static defaultProps = {
    tittle: "Github Finder",
    icon: "fab fa-github fa-1x",
  };
  static propTypes = {
    tittle: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div>
        <div className="nav-wrapper #80cbc4 teal lighten-3">
          <h2>
            <i className={this.props.icon}></i>
            {this.props.tittle}
          </h2>
          <ul>
            <li className="waves-effect waves-light  btn pink ">
              <i className="large material-icons left">home</i>
              <Link to="/">Home</Link>
            </li>
            <li className="btn yellow">
              <i className="large material-icons left">info</i>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>

        {/* this is the floating button (bottom right) */}
        <div className="fixed-action-btn">
          <a className="btn-floating btn-large red">
            <i className="large material-icons">share</i>
          </a>
          <ul>
            <li>
              <a className="btn-floating red">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a className="btn-floating yellow darken-1">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a className="btn-floating green">
                <i className="fab fa-github"></i>
              </a>
            </li>
            <li>
              <a className="btn-floating blue">
                <i className="fab fa-facebook"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Nav;

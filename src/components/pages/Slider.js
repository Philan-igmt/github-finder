import React, { Component } from "react";

class Slider extends Component {
  componentDidMount() {
    const M = window.M;
    document.addEventListener("DOMContentLoaded", function () {
      var elems = document.querySelectorAll(".slider");
      var instances = M.Slider.init(elems, {});
    });
  }

  render() {
    return (
      <div className="slider">
        <ul className="slides">
          <li>
            <img src="https://149367133.v2.pressablecdn.com/wp-content/uploads/2018/06/github-logo-microsoft.jpg" />
            {/* <img src="https://hackernoon.com/hn-images/1*9qX9F9MGsWKfcmgTOR9BPw.png" /> */}
          </li>
          <li>
            <img src="https://media.istockphoto.com/photos/source-code-branch-3d-rendering-picture-id1226710446?b=1&k=6&m=1226710446&s=170667a&w=0&h=y2cAQ6HHhAEDH2Tzqtd7GDs5DLvob_EquLQoKwAC0Vo=" />
            <div className="caption red-text left-align">
              <h3>Pull and Merge</h3>
              <h3 className="light text-lighten-3">Make it your own.</h3>
            </div>
          </li>
          <li>
            <img src="https://www.howtogeek.com/wp-content/uploads/2017/09/1-github-explained.png" />
            <div className="caption right-align">
              <h3 className="light pink-text text-lighten-3">
                Share your Work...
              </h3>
            </div>
          </li>
          <li>
            <img src="https://hackernoon.com/hn-images/1*9qX9F9MGsWKfcmgTOR9BPw.png" />
            {/* <img src="https://www.howtogeek.com/wp-content/uploads/2017/09/1-github-explained.png" /> */}
          </li>
        </ul>
      </div>
    );
  }
}

export default Slider;

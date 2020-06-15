import React, { Fragment } from "react";
import Search from "../Users/Search";
import Users from "../Users/Users";
import Slider from "./Slider";

const Home = () => {
  return (
    <Fragment>
      <Slider />
      <Search />
      <Users />
    </Fragment>
  );
};

export default Home;

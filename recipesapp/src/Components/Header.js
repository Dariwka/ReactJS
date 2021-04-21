import React, { Component } from "react";
import Nav from "./Nav";

export default class Header extends Component {
  render() {
    return (
      <header>
        <h1>Random Recipes</h1>
        <Nav />
      </header>
    );
  }
}

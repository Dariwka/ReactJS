import React, { Component } from "react";
import Nav from "./Nav";

export default class Header extends Component {
  render() {
    return (
      <header>
        <h1>Kitchen App</h1>
        <Nav />
      </header>
    );
  }
}

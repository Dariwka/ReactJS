import React, { Component } from "react";
import Nav from "./Nav";
import image from "./logo/logokitchenapp.png";

export default class Header extends Component {
  render() {
    return (
      <header>
        <img src={image} height={100} width={100} alt="logo" />
        <h1>Kitchen App</h1>
        <Nav />
      </header>
    );
  }
}

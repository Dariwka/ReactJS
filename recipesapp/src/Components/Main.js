import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Recipes from "./Recipes/Recipes";
import About from "./About";
import Contacts from "./Contacts";
import Home from "./Home";

class Main extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/recipes" component={Recipes} />
          <Route path="/contacts" component={Contacts} />
        </Switch>
      </main>
    );
  }
}

export default Main;

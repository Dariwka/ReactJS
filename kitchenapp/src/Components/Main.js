import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import RecipesList from "./Recipes/RecipesList";

import About from "../Pages/About";
import Contacts from "../Pages/Contacts";
import Home from "../Pages/Home";

class Main extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/recipes" component={RecipesList} />
          <Route path="/contacts" component={Contacts} />
        </Switch>
      </main>
    );
  }
}

export default Main;

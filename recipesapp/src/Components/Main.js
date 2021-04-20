import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import Recipes from "./Recipes/Recipes";

const Home = () => {
  return (
    <div>
      <h1>This is home page</h1>
    </div>
  );
};

const About = () => {
  return (
    <div>
      <h1>This is About Us page</h1>
    </div>
  );
};

const Contacts = () => {
  return (
    <div>
      <h1>This is Contacts Us page</h1>
    </div>
  );
};

const Nav = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/gallery">About Us</Link>
          </li>
          <li>
            <Link to="/recipes">Recipes</Link>
          </li>
          <li>
            <Link to="/contacts">Contacts Us</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

const Main = () => {
  return (
    <div>
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/recipes" component={Recipes} />
        <Route path="/contacts" component={Contacts} />
      </Switch>
    </div>
  );
};

export default Main;

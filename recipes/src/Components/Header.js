import React, { Component } from "react";
import {
  Navbar,
  Nav,
  FormControl,
  Container,
  Form,
  Button,
} from "react-bootstrap";
import logo from "./logo192.png";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../Pages/Home";
import Recipes from "../Pages/Recipes";
import About from "../Pages/About";
import Contacts from "../Pages/Contacts";

class Header extends Component {
  render() {
    return (
      <>
        <Router>
          <Navbar collapseOnSelect expand="md" bg="danger" variant="dark">
            <Container>
              <Navbar.Brand href="/">
                <img
                  scr={logo}
                  height="30"
                  width="30"
                  className="d-inline-block align-top"
                  alt=""
                />
                Food lover
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link as={Link} to="/">
                    Home
                  </Nav.Link>
                  <Nav.Link as={Link} to="/recipes">
                    Recipes
                  </Nav.Link>
                  <Nav.Link as={Link} to="/about">
                    About Us
                  </Nav.Link>
                  <Nav.Link as={Link} to="/contact">
                    Contact
                  </Nav.Link>
                </Nav>
                <Form inline>
                  <FormControl
                    type="text"
                    placeholder="Search"
                    className="mr-sm-2"
                  />
                  <Button variant="outline-info">Search</Button>
                </Form>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/recipes" component={Recipes} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contacts" component={Contacts} />
          </Switch>
        </Router>
      </>
    );
  }
}

export default Header;

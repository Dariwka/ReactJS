import React from "react";
import { Switch, Route, Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h1>Welcome to page</h1>
        </div>
    );

}

const Recepies = () => {
    return (
        <div>
            <h1>Do you like cooking? Let´s take it easier</h1>
        </div>
    )
}

const About = () => {
    return (
        <div>
            <h1>This project was done during study in BHC </h1>
        </div>
    );
}

const Nav = () => {
    return (
        <div>
            <nav>
                <ul class="main_menu">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/recepies">Recepies</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

const Header = () => {
    return (
        <header>
            <div class="logo">
                <h1>LOGO</h1>
            </div>
            <div>
                <Nav />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/recepies" component={Recepies} />
                    <Route path="/about" component={About} />
                </Switch>
            </div>
        </header>
    );
}

export default Header;
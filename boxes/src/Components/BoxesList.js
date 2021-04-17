import React, { Component } from "react";
import BoxCard from "./BoxCard";

class BoxesList extends Component {
    state = {
        persons: [
            {
                name: "Dmitri",
                age: 60,
                title: "LVI"
            },
            {
                name: "Galina",
                age: 60,
                title: "home"
            },
            {
                name: "Dina",
                age: 80,
                title: "senior"
            },

        ],

    };

    handleClick = () => {
        this.setState({
            persons: [
                {
                    name: "Gena",
                    age: 60,
                    title: "LVI"
                },
                {
                    name: "Tatjana",
                    age: 60,
                    title: "home"
                },
                {
                    name: "Nadezhda",
                    age: 80,
                    title: "senior"
                },

            ],

        });
    };

    render() {
        return (
            <main>
                <button onClick={this.handleClick}>Click me main page</button>
                <div>
                    <BoxCard name={this.state.persons[0].name} age={this.state.persons[0].age} title={this.state.persons[0].title} />
                    <BoxCard name={this.state.persons[1].name} age={this.state.persons[1].age} title={this.state.persons[1].title} />
                    <BoxCard name={this.state.persons[2].name} age={this.state.persons[2].age} title={this.state.persons[2].title} />
                </div>
            </main>
        );
    }
}



export default BoxesList;
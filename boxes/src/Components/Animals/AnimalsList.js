import React, { Component } from "react";
import AnimalCard from "./AnimalCard";
import SearchBox from "../SearchBox/Searchbox";
import "./Animal.css";

import { animals } from "./animals";

class AnimalsList extends Component {
    state = {
        animals: animals,
        searchInput: "",
    };

    clickHandler = (name) => {
        alert("Hello, my name is" + name);
    };

    searchValueHandler = (event) => {
        this.setState({
            searchInput: event.target.value,
        });
        console.log(this.state.searchInput);
    };

    render() {
        const animalFilter = this.state.animals.filter(animal => {
            return animal.name.toLocaleLowerCase().includes(this.state.searchInput.toLocaleLowerCase());
        });

        const AnimalsList = animalFilter.map((animal) => {
            return (
                <AnimalCard
                    name={animal.name}
                    key={animal.name}
                    clickme={() => this.clickHandler(animal.name)}
                />
            );
        });
        return (
            <div>
                <SearchBox search={this.searchValueHandler} />
                <div className="animalList">{AnimalsList}</div>
            </div>
        );
    }
}

export default AnimalsList;

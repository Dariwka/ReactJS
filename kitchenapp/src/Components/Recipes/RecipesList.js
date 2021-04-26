import React, { Component } from "react";
import RecipesCard from "./RecipesCard";
import SearchBox from "../Search/SearchBox";
import Form from "../Form/Form";

import "../Recipes/Recipes.css";
import SendUp from "../SendUp/SendUp";

class RecipesList extends Component {
  state = {
    recipes: [],
    isLoading: false,
    searchInput: "",
    inputData: {
      name: "",
      image: "",
      recipeCategory: "",
      recipeCuisine: "",
      description: "",
    },
    showSendUp: false,
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    fetch("http://localhost:3002/recipes")
      .then((res) => res.json())
      .then((data) => this.setState({ recipes: data, isLoading: false }));
  }

  changeHandler = (e) => {
    this.setState({
      inputData: { ...this.state.inputData, [e.target.name]: e.target.value },
    });
  };

  popupHandler = (e) => {
    this.setState({
      showRecipesPopup: true,
    });
    e.preventDefault();
  };

  searchValueHandler = (event) => {
    this.setState({
      searchInput: event.target.value,
    });
    console.log(this.state.searchInput);
  };

  sendDataHandler = () => {
    const requestOptions = {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(this.state.inputData),
    };
    fetch("http://localhost:3002/recipes", requestOptions);
    alert("Your recipe is posted", window.location.reload());
  };

  render() {
    const recipesFilter = this.state.recipes.filter((recipes) => {
      return recipes.name
        .toLocaleLowerCase()
        .includes(this.state.searchInput.toLocaleLowerCase());
    });

    const RecipesList = recipesFilter.map((recipes) => {
      return (
        <RecipesCard
          key={recipes.id}
          name={recipes.name}
          img={recipes.image}
          description={recipes.description.substring(0, 300) + "..."}
          recipeCuisine={recipes.recipeCuisine}
          recipeCategory={recipes.recipeCategory}
        />
      );
    });
    return (
      <div>
        <SearchBox search={this.searchValueHandler} />
        <Form change={this.changeHandler} submit={this.popupHandler} />
        {this.state.showSendUp && (
          <SendUp {...this.state.inputData} submit={this.sendDataHandler} />
        )}
        <div>{RecipesList}</div>
      </div>
    );
  }
}

export default RecipesList;

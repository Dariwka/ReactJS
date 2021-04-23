import React, { Component } from "react";
import RecipesCard from "./RecipesCard";
import SearchBox from "../Search/SearchBox";
import "../Recipes/Recipes.css";
import RecipesPopup from "../Recipes/RecipesPopup";

class RecipesList extends Component {
  state = {
    recipes: [],
    isLoading: false,
    searchInput: "",
    showRecipesPopup: false,
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    fetch("http://localhost:3002/recipes")
      .then((res) => res.json())
      .then((data) => this.setState({ recipes: data, isLoading: false }));
  }

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
          cookTime={recipes.cookTime}
          recipeIngredient={recipes.recipeIngredient}
          recipeCuisine={recipes.recipeCuisine}
          recipeCategory={recipes.recipeCategory}
        />
      );
    });
    return (
      <div>
        <SearchBox search={this.searchValueHandler} />
        <div className="recipes">{RecipesList}</div>
      </div>
    );
  }
}

export default RecipesList;

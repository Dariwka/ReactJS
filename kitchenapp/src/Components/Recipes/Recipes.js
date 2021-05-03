import React, { useState, useEffect } from "react";
import axios from "axios";
import RecipesList from "./RecipesList";
import SearchBox from "../Search/SearchBox";
import Form from "../Form/Form";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3002/recipes")
      .then((res) => setRecipes(res.data));
  }, []);

  const searchValueHandler = (e) => {
    setSearchInput(e.rarget.value);
    console.log(searchInput);
  };

  const recipeFilter = recipes.filter((recipe) => {
    return recipe.name.toLowerCase().includes(searchInput.toLowerCase());
  });

  return (
    <div>
      <SearchBox search={searchValueHandler} />
      <Form />
      <RecipesList recipes={recipeFilter} />
    </div>
  );
};

export default Recipes;

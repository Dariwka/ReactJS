import React from "react";
import RecipesPopup from "../Recipes/RecipesPopup";

const RecipesCard = ({
  img,
  name,
  description,
  recipeCategory,
  recipeCuisine,
  cookTime,
  recipeIngredient,
}) => {
  return (
    <section className="container-recipes">
      <h2>Featured Meal</h2>
      <div className="recipes">
        <h3 className="recipes-title">{name}</h3>
        <div className="recipes-img">
          <img src={`assets/img/${img}.jpg`} />
        </div>
        <div className="recipes-details">
          <p className="recipe-description">Description: {description}</p>
          <ul className="recipe-info">
            <li>
              Category:
              <strong> {recipeCategory}</strong>
            </li>
            <li>
              Area:
              <strong> {recipeCuisine}</strong>
            </li>
            <li>
              Time:
              <strong> {cookTime} min</strong>
            </li>
          </ul>
          <ul className="recipe-ingredient">
            <li>
              Ingredients:
              <strong> {recipeIngredient} </strong>
            </li>
          </ul>
          <button className="btn-recipes">
            View Recipe <i className="fas fa-arrow-alt-circle-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default RecipesCard;

import React from "react";

const closeHandler = () => {
  window.location.close();
};

const RecipesPopup = ({
  img,
  name,
  description,
  recipeCategory,
  recipeCuisine,
  cookTime,
  recipeIngredient,
  recipeInstructions,
}) => {
  return (
    <div className="overlay">
      <div className="popup">
        <div className="img">
          <img src={img} />
        </div>
        <div className="recipe-details">
          <h3 className="recipe-title">{name}</h3>
          <p className="recipe-description">{description}</p>
          <ul className="recipe-info">
            <li>
              Category:
              <strong>{recipeCategory}</strong>
            </li>
            <li>
              Area:
              <strong>{recipeCuisine}</strong>
            </li>
            <li>
              Time:
              <strong>{cookTime}</strong>
            </li>
          </ul>
          <ul className="recipe-ingredient">
            <li>
              Ingredients:
              <strong>{recipeIngredient}</strong>
            </li>
          </ul>
          <p className="recipe-descriptions">
            Cooking Steps:{recipeInstructions}
          </p>
          <button onClick={closeHandler}>Ok</button>
        </div>
      </div>
    </div>
  );
};

export default RecipesPopup;

import React from "react";
import { Link } from "react-router-dom";

const RecipesCard = ({
  img,
  name,
  description,
  recipeCategory,
  recipeCuisine,
  link,
}) => {
  return (
    <section className="container-recipes">
      <h2>Featured Meal</h2>
      <div className="recipes">
        <div className="recipes-img">
          <img src={`assets/img/${img}.jpg`} alt={""} />
        </div>
        <div className="recipes-details">
          <h3 className="recipes-title">{name}</h3>
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
          </ul>
          <Link className="btn-recipes" to={`/${link}`}>
            View Recipe <i className="fas fa-arrow-alt-circle-right"></i>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RecipesCard;

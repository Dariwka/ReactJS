import React, { useState, useEffect } from "react";
import "../Recipes/Recipes.css";

const API_URL = "https://www.themealdb.com/api/json/v1/1/random.php";

const Recipes = () => {
  const [meal, setMeal] = useState(undefined);

  useEffect(() => {
    /*fetch(API_URL)
      .then((res) => res.json())
      .then((resp) => {
        setMeal(res.meals[0]);
      });*/
    async function getMeal() {
      const res = await fetch(API_URL);
      const data = await res.json();

      setMeal(data.meals[0]);
    }

    getMeal();
  }, []);

  if (!meal) return null;

  const { strMeal, strMealThumb, strInstructions, strArea, srtCategory } = meal;

  return (
    <section className="container-recipes">
      <h2>Featured Meal</h2>
      <div className="meal">
        <div className="meal-img">
          <img src={strMealThumb} alt={strMeal} />
        </div>
        <div className="meal-details">
          <h3 className="meal-title">{strMeal}</h3>
          <p className="meal-instruction">
            {strInstructions.substring(0, 300) + "..."}
          </p>
          <ul className="meal-info">
            <li>
              Category:
              <strong>{srtCategory}</strong>
            </li>
            <li>
              Area:
              <strong>{strArea}</strong>
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

export default Recipes;

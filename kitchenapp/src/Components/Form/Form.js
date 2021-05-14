import React from "react";
import "./Form.css";

const Form = ({ submit, change }) => {
  return (
    <div className="form">
      <form onSubmit={submit}>
        <div>
          <label htmlFor="name">Recipe's Name:</label>
          <input type="text" id="name" name="name" onChange={change} required />
        </div>
        <div>
          <label htmlFor="recipeCategory">Category:</label>
          <input
            type="recipeCategory"
            id="recipeCategory"
            name="recipeCategory"
            onChange={change}
            required
          />
        </div>
        <div>
          <label htmlFor="recipeCuisine">Area:</label>
          <input
            type="recipeCuisine"
            id="recipeCuisine"
            name="recipeCuisine"
            onChange={change}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            name="description"
            id="description"
            onChange={change}
            required
          ></textarea>
        </div>
        <div>
          <label htmlFor="recipeIngredient">Ingredients:</label>
          <textarea
            name="recipeIngredient"
            id="recipeIngredient"
            onChange={change}
            required
          ></textarea>
        </div>
        <div>
          <label htmlFor="recipeInstructions">Instructions:</label>
          <textarea
            name="recipeInstructions"
            id="recipeInstructions"
            onChange={change}
            required
          ></textarea>
        </div>
        <input className="send" type="submit" value="Send" />
      </form>
    </div>
  );
};

export default Form;

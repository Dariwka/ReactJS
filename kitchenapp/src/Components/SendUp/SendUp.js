import React from "react";
import "./SendUp.css";

const closeHandler = () => {
  window.location.reload();
};

const SendUp = ({
  recipes,
  recipeCategory,
  recipeCuisine,
  description,
  submit,
}) => {
  return (
    <div className="overlay">
      <div className="popup">
        <h2>Your recipe:</h2>
        <div>
          <p>
            Recipe's Name: <span>{recipes}</span>
          </p>
          <p>
            Category: <span>{recipeCategory}</span>
          </p>
          <p>
            Area: <span>{recipeCuisine}</span>
          </p>
          <p>
            Description: <span>{description}</span>
          </p>
          <button onClick={submit}>Yes, I'm sure</button>
          <button className="secondary" onClick={closeHandler}>
            No, don't want to post it
          </button>
        </div>
      </div>
    </div>
  );
};

export default SendUp;

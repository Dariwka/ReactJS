import React from "react";
import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Meal = ({ meal }) => {
  if (!meal) return null;

  const { strMealThumb, strMeal, strInstructions } = meal;

  return (
    <CardDeck>
      <Card border="dark" style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={strMealThumb}
          alt={strMeal}
          width="300"
          height="300"
        />
        <Card.Body>
          <Card.Title>{strMeal}</Card.Title>
          <Card.Text>
            {strInstructions && strInstructions.substring(0, 100) + "..."}
          </Card.Text>
          <Button variant="danger">Read more</Button>
        </Card.Body>
      </Card>
      <Card border="dark" style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={strMealThumb}
          alt={strMeal}
          width="300"
          height="300"
        />
        <Card.Body>
          <Card.Title>{strMeal}</Card.Title>
          <Card.Text>
            {strInstructions && strInstructions.substring(0, 100) + "..."}
          </Card.Text>
          <Button variant="danger">Read more</Button>
        </Card.Body>
      </Card>
      <Card border="dark" style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={strMealThumb}
          alt={strMeal}
          width="300"
          height="300"
        />
        <Card.Body>
          <Card.Title>{strMeal}</Card.Title>
          <Card.Text>
            {strInstructions && strInstructions.substring(0, 100) + "..."}
          </Card.Text>
          <Button variant="danger">Read more</Button>
        </Card.Body>
      </Card>
    </CardDeck>
  );
};

export default Meal;

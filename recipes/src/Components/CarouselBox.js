import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import meal from "../assets/meal.jpg";
import dmeal from "../assets/dmeal.jpg";

class CarouselBox extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" scr={meal} alt="Cooking" />
          <Carousel.Caption>
            <h3>Cooking is the Best Way for Relaxing</h3>
            <p>
              Cooking or cookery is the art, science, and craft of using heat to
              prepare food for consumption.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" scr={dmeal} alt="Cooking" />
          <Carousel.Caption>
            <h3>Cooking is the Best Way for Relaxing</h3>
            <p>
              Cooking or cookery is the art, science, and craft of using heat to
              prepare food for consumption.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default CarouselBox;

import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";

class CarouselBox extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://source.unsplash.com/800x400/?{cooking}"
            alt="cooking"
          />
          <Carousel.Caption>
            <h2>Cooking is the Best Way for Relaxing</h2>
            <p>
              Cooking or cookery is the art, science, and craft of using heat to
              prepare food for consumption.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://source.unsplash.com/800x400/?{vegetables}"
            alt="vegetables"
          />
          <Carousel.Caption>
            <h2>Cooking is the Best Way for Relaxing</h2>
            <p>
              Cooking or cookery is the art, science, and craft of using heat to
              prepare food for consumption.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://source.unsplash.com/800x400/?{fruits}"
            alt="fruits"
          />
          <Carousel.Caption>
            <h2>Cooking is the Best Way for Relaxing</h2>
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

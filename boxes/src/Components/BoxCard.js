import React from "react";

const BoxCard = (props) => {
    const handleClick = () => {
        console.log("woow");
    };
    return (
        <div className="box">
            <h2>
                Name: {props.name}
            </h2>
            <p>
                Age: {props.age}
            </p>
            <p>
                Title: {props.title}
            </p>
            <button onClick={handleClick}>Click me</button>
        </div>
    );
};

export default BoxCard;
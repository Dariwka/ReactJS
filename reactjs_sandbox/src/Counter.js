import React, { Component } from 'react';

class Counter extends Component {
    state = {
        counter: 0,

    };

    addHandler = () => {
        console.log("addHandler clicked")
        this.setState({
            counter: this.state.counter + 1,
        });
    };

    removeHandler = () => {
        if (this.state.counter !== 0) {
            this.setState({
                counter: this.state.counter - 1,
            });
        }
    };

    resetHandler = () => {
        console.log("resetHandler clicked")
        this.setState({
            counter: 0,
        });
    }

    render() {
        let circleClass = `${this.state.counter === 0
            ? ""
            : this.state.counter % 2 === 0
                ? "even"
                : "odd"
            } circle`;
        return (
            <div id="main">
                <h1 className={circleClass}>{this.state.counter}</h1>
                <div id="buttons">
                    <button onClick={this.addHandler}>Add one</button>
                    <button onClick={this.removeHandler}>Remove one</button>
                    <button onClick={this.resetHandler}>Reset</button>
                </div>
            </div>
        );
    }
}


export default Counter;

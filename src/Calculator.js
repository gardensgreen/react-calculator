import React, { Component } from "react";

export default class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = { result: 0, num1: "", num2: "" };
    }
    handleFirstNum = (e) => {
        console.log(e);
        let parsed = parseInt(e.target.value, 10);
        this.setState({ num1: parsed });
    };
    handleSecondNum = (e) => {
        console.log(e);
        let parsed = parseInt(e.target.value, 10);
        this.setState({ num2: parsed });
    };
    add = (e) => {
        let result = this.state.num1 + this.state.num2;
        this.setState({
            result: result,
        });
    };
    subtract = (e) => {
        let result = this.state.num1 - this.state.num2;
        this.setState({
            result: result,
        });
    };
    multiply = (e) => {
        let result = this.state.num1 * this.state.num2;
        this.setState({
            result: result,
        });
    };
    divide = (e) => {
        let result = this.state.num1 / this.state.num2;
        this.setState({
            result: result,
        });
    };
    render() {
        return (
            <div>
                <h1>Result: {this.state.result}</h1>
                <input
                    type="number"
                    placeholder="first number"
                    onChange={this.handleFirstNum}
                    value={this.state.num1}
                ></input>
                <input
                    type="number"
                    placeholder="Second number"
                    onChange={this.handleSecondNum}
                    value={this.state.num2}
                ></input>
                <button onClick={this.add}>+</button>
                <button onClick={this.subtract}>-</button>
                <button onClick={this.multiply}>*</button>
                <button onClick={this.divide}>/</button>
            </div>
        );
    }
}

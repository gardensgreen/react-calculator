import React, { Component } from "react";

export default class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {result: 0, num1 :"", num2:""};
    }
    render() {
        return (
            <div>
                <h1>Time for Math!</h1>
            </div>
        );
    }
}

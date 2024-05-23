import React, { Component } from "react";

export default class ClassComponent extends Component {
  render() {
    return (
      <div>
        {/* For this example to work, you need to pass props to the App.jsx component */}
        {/* <h1 className="solutionONE">
          Hello, {this.props.name}, you got the number - {this.props.number}
        </h1> */}

        {/* For this example to work, you need to uncomment line 20 and remove all props from App.jsx */}
        {/* <h1 className="solutionTWO">
         Hello, {this.props.name}
        </h1> */}

        {/* For this example to work, you need to pass props with an array to the App.jsx file  */}
        {/* <h1>
        Hello, {this.props.name}, you got the number -
          {this.props.numbers.join(".")}
        </h1> */}
      </div>
    );
  }
}

// ClassComponent.defaultProps = { name: "Bogdan" };

import React, { Component } from "react";

export default class ClassComponent extends Component {
  render() {
    return (
      <div>
        {/* <h1 className="solutionONE">
        For this example to work, you need to pass props to the App.jsx component
          Hello, {this.props.name}, you got the number - {this.props.number}
        </h1> */}

        {/* <h1 className="solutionTWO">
          For this example to work, you need to uncomment line 20 and remove all props from App.jsx
          Hello, {this.props.name}
        </h1> */}

        {/* <h1>
          For this example to work, you need to pass props with an array to the
          App.jsx file Hello, {this.props.name}, you got the number -
          {this.props.numbers.join(".")}
        </h1> */}
      </div>
    );
  }
}

// ClassComponent.defaultProps = { name: "Bogdan" };

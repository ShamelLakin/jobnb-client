import React, { Component } from "react";

class Button extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  handleClick = () => {
    // const stateCopy = { ...this.state };
    // let newCount = stateCopy.count + 1;
    this.setState((prevState) => ({
      // prevState is a copy of your current state before any changes are made
      count: prevState.count + 1,
    }));
  };

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleClick}>Likes</button>
      </div>
    );
  }
}

export default Button;

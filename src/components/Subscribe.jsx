import React, { Component } from "react";

export default class ChangeState extends Component {
  constructor() {
    super();
    this.state = { message: "Hello User", btnName: "SUBSCRIBE" };
  }
  changeMessage = () => {
    this.setState({ message: "Thanks For Subscribing", btnName: "SUBSCRIBED" });
  };
  render() {
    return (
      <>
        <h1>{this.state.message}</h1>
        <button
          className="btn btn-danger"
          onClick={() => {
            this.changeMessage();
          }}
        >
          {this.state.btnName}
        </button>
      </>
    );
  }
}

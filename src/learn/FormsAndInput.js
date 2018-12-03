import React, { Component } from "react";

export default class FormsAndInput extends Component {
  state = {
    fullName: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    const data = this.state;
    console.log(data);
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  componentDidMount = () => {
    this.setState({ fullName: "Mario" });
  };

  render() {
    const { fullName } = this.state;

    return (
      <div>
        <h1>Forms and inputs</h1>
        <h2>Fullname is {fullName}</h2>
        <form onSubmit={this.handleSubmit}>
          <p>
            <input
              type="text"
              placeholder="Type your name here"
              name="fullName"
              onChange={this.handleInputChange}
              value={fullName}
            />
          </p>
          <p>
            <button>Send message</button>
          </p>
        </form>
      </div>
    );
  }
}

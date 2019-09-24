import React, { Component } from "react";

export default class FormBox extends Component {
  createNewFood(event) {
    event.preventDefault();
    this.setState({
      name: event.target.value,
      calories: event.target.value
    });
  }

  render() {
    const food = this.props.food;
    return (
      <div>
        <form onSubmit={this.createNewFood}>
          <div>
            <label>Name: </label>
            <input type="text" name="name" />
          </div>
          <div>
            <label htmlFor="">Calories: </label>
            <input type="text" />
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

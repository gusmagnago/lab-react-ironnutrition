import React, { Component } from "react";
import "./App.css";

import JSONfoods from "./foods.json";
import FoodBox from "./component/FoodBox";
import SearchBox from "./component/Search";
import FormBox from "./component/FormBox";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foods: JSONfoods,
      active: false
    };
    this.showingForm = this.showingForm.bind(this);
  }

  showingForm(event) {
    this.setState({
      active: true
    });
  }

  render() {
    const food = this.props.food;
    return (
      <div className="App">
        <div>
          <h1>Iron Nutrition</h1>
        </div>
        <div>
          <SearchBox />
        </div>
        <br />
        <div>
          {this.state.foods.map(food => (
            <FoodBox food={food} />
          ))}
        </div>
        <button onClick={this.showingForm}>Create</button>
        {this.state.active && <FormBox food={food} />}
      </div>
    );
  }
}

export default App;

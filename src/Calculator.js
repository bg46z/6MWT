import React from "react";

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sex: "male",
      height: null,
      age: null,
      weight: null,
      result: ""
    };

    this.handleSexChange = this.handleSexChange.bind(this);
    this.handleAgeChange = this.handleAgeChange.bind(this);
    this.handleHeightChange = this.handleHeightChange.bind(this);
    this.handleWeightChange = this.handleWeightChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  calculate6mwd(person) {
    if (person.sex === "male") {
      return (
        // prettier-ignore
        ((7.57 * (person.height * 2.54)) - (5.02 * person.age) - (1.76 * (person.weight * 0.453592))) - 309
      );
    } else {
      return (
        // prettier-ignore
        ((2.11 * (person.height * 2.54)) - (5.78 * person.age) - (2.29 * (person.weight * 0.453592))) + 667
      );
    }
  }

  handleSexChange(event) {
    this.setState({ sex: event.target.value });
  }

  handleClearState(event) {
    this.setState({
      sex: "male",
      height: null,
      age: null,
      weight: null,
      result: ""
    });
  }

  handleAgeChange(event) {
    this.setState({ age: parseInt(event.target.value, 10) });
  }

  handleHeightChange(event) {
    this.setState({ height: parseInt(event.target.value, 10) });
  }

  handleWeightChange(event) {
    this.setState({ weight: parseInt(event.target.value, 10) });
  }
  handleSubmit(event) {
    this.setState({ result: this.calculate6mwd(this.state) });
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h1>6MWD value</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Sex:
            <select value={this.state.sex} onChange={this.handleSexChange}>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </label>
          <br />
          <label>
            Height in inches:
            <input
              type="number"
              value={this.state.height}
              pattern="[0-9]*"
              inputMode="numeric"
              onChange={this.handleHeightChange}
            />
          </label>
          <br />

          <label>
            Age in years:
            <input
              type="number"
              value={this.state.age}
              pattern="[0-9]*"
              inputMode="numeric"
              onChange={this.handleAgeChange}
            />
          </label>
          <br />
          <label>
            Weight in Pounds:
            <input
              type="number"
              value={this.state.weight}
              pattern="[0-9]*"
              inputMode="numeric"
              onChange={this.handleWeightChange}
            />
          </label>
          <br />
          <input type="submit" value="Submit" />
        </form>
        <br />
        <br />
        Result: {this.state.result}
        <br />
        <br />
        <button onSubmit={this.handleClearState}>Clear</button>
      </div>
    );
  }
}

export default Calculator;

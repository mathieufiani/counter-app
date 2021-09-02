import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value,
  };
  styles = {
    fontSize: 10,
    fontWeight: "bold",
  };

  handleIncrements = (product) => {
    this.setState({ value: this.state.value + 1 });
  };
  render() {
    return (
      <React.Fragment>
        {this.props.children}
        <span style={this.styles} className={this.changeColorCountBtn()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.handleIncrements({ id: 1 })}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </React.Fragment>
    );
  }
  changeColorCountBtn() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.state;
    return value === 0 ? "zero" : value;
  }
}

export default Counter;

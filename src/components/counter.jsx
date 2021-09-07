import React, { Component } from "react";

class Counter extends Component {
  styles = {
    fontSize: 10,
    fontWeight: "bold",
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.counter.value !== this.props.counter.value) {
    }
  }
  componentWillUnmount() {
    console.log("counter - Unmount");
  }
  render() {
    console.log("counter - Rendered");
    return (
      <div className="container row">
        <div className="col-1 m-2">
          <span style={this.styles} className={this.changeColorCountBtn()}>
            {this.formatCount()}
          </span>
        </div>
        <div className="col">
          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-secondary btn-sm"
          >
            +
          </button>
          <button
            className="btn btn-secondary btn-sm m-2"
            onClick={() => this.props.onDecrement(this.props.counter)}
            disabled={this.disableBtn()}
          >
            -
          </button>
          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn btn-danger btn-sm"
            style={this.styles}
          >
            x
          </button>
        </div>
      </div>
    );
  }
  changeColorCountBtn() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "zero" : value;
  }
  disableBtn() {
    const { value } = this.props.counter;
    return value === 0;
  }
}

export default Counter;

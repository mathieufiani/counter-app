import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 1,
    tags: ["tag1", "tag2", "tag3"],
  };
  styles = {
    fontSize: 10,
    fontWeight: "bold",
  };

  renderTags() {
    if (this.state.tags.length === 0) return "There are no tags";
    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  handleIncrements() {
    console.log("Incremented", this);
  }
  render() {
    return (
      <React.Fragment>
        <span style={this.styles} className={this.changeColorCountBtn()}>
          {this.formatCount()}
        </span>
        <button
          onClick={this.handleIncrements()}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        {this.state.tags.length === 0 && "please add a tag !"}
        {this.renderTags()}
      </React.Fragment>
    );
  }
  changeColorCountBtn() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "zero" : count;
  }
}

export default Counter;

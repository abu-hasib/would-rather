import React, { Component } from "react";

class Polls extends Component {
  render() {
    const { title, polls, questions } = this.props;
    return (
      <div>
        <h2>{title}</h2>
        {Object.keys(questions).map((key) => (
          <div>
            <hr />
            <h3>{polls[key].author} asks: </h3>
            <p>{polls[key].optionOne.text} </p>
          </div>
        ))}
      </div>
    );
  }
}

export default Polls;

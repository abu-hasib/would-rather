import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

class Polls extends Component {
  render() {
    const { title, polls, questions } = this.props;
    const { url, path } = this.props.match;
    console.log("$$$: ", this.props);
    return (
      <div>
        <ul>
          <h2>{title}</h2>
          {Object.keys(questions).map((key) => (
            <li>
              <hr />
              <h3>{polls[key].author} asks: </h3>
              <p>{polls[key].optionOne.text} </p>
              <Link to={`questions/${key}`}>View Poll</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default withRouter(Polls);

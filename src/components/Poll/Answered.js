import React, { Component } from "react";
import { connect } from "react-redux";
import { _saveQuestionAnswer } from "../../utils/_DATA";

export class Answered extends Component {
  render() {
    const {
      polls,
      users,
      authedUser,
      id,
      totalVotes,
      option1Votes,
      option2Votes,
    } = this.props;

    let percent1 = calPercentage(option1Votes, totalVotes);

    let percent2 = calPercentage(option2Votes, totalVotes);

    console.log(
      "*****: ",
      users[authedUser].answers[id] === "optionOne" && ">"
    );

    return (
      <div>
        <h1>Asked by {polls[id].author}</h1>
        <h2>Results</h2>
        <div>
          <p>
            {users[authedUser].answers[id] === "optionOne" && ">"}
            {polls[id].optionOne.text}
          </p>
          <p>Percentage: {percent1}% </p>
          <i>
            {option1Votes} out of {totalVotes} votes
          </i>
        </div>

        <div>
          <p>
            {users[authedUser].answers[id] === "optionTwo" && ">"}
            {polls[id].optionTwo.text}
          </p>
          <p>Percentage: {percent2}% </p>
          <i>
            {option2Votes} out of {totalVotes} votes
          </i>
        </div>
      </div>
    );
  }
}

function calPercentage(value, total) {
  return ((value / total) * 100).toFixed(1);
}

function mapStateToProps({ polls, authedUser }, { id }) {
  return {
    totalVotes:
      polls[id].optionOne.votes.length + polls[id].optionTwo.votes.length,
    option1Votes: polls[id].optionOne.votes.length,
    option2Votes: polls[id].optionTwo.votes.length,
    authedUser,
  };
}

export default connect(mapStateToProps)(Answered);

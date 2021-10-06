import React, { Component } from "react";
import { connect } from "react-redux";

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

    return (
      <div>
        <div className="container mx-auto">
          <div className="bg-white max-w-sm mx-auto rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-100 cursor-pointer">
            <div className="h-20 bg-yellow-500 flex items-center justify-between">
              <div className="flex items-center">
                <img
                  className="ml-4 mr-1 border-2 rounded-full h-10 w-10"
                  src={users[polls[id].author].avatarURL}
                  alt={""}
                />
                <p class="mr-10 min-w-max text-gray-50 text-lg">
                  Asked by {users[polls[id].author].name}:
                </p>
              </div>

              <p className="mr-4 text-white font-thin text-lg italic min-w-max">
                {new Date().toDateString()}
              </p>
            </div>
            <div className="p-4">
              <h3 className="text-3xl font-medium leading-tight">Results:</h3>

              <div
                className={
                  users[authedUser].answers[id] === "optionOne"
                    ? "bg-yellow-100 flex flex-col items-center my-4 py-4 px-4 space-y-4 border border-yellow-500 rounded-md "
                    : "flex flex-col items-center my-4 py-4 px-4 space-y-4 border border-yellow-500 rounded-md"
                }
              >
                <div className="text-yellow-500 text-lg font-medium tracking-wide">
                  Would you rather {polls[id].optionOne.text}?
                </div>
                <div className="relative w-full bg-gray-300 rounded-md">
                  <p
                    className="bg-yellow-500 text-xs leading-none py-1 text-center rounded-tl-md rounded-bl-md text-white h-6"
                    style={{ width: `${percent1}%` }}
                  ></p>
                  <span className="absolute inset-0 text-center font-medium text-white">
                    {percent1}%
                  </span>
                </div>
                <i>
                  {option1Votes} out of {totalVotes} votes
                </i>
              </div>
              <div
                className={
                  users[authedUser].answers[id] === "optionTwo"
                    ? "bg-yellow-100 flex flex-col items-center my-4 py-4 px-4 border space-y-4 border-yellow-500 rounded-md "
                    : "flex flex-col items-center my-4 py-4 px-4 border space-y-4 border-yellow-500 rounded-md"
                }
              >
                <div className="text-yellow-500 text-lg font-medium tracking-wide">
                  Would you rather {polls[id].optionTwo.text}?
                </div>
                <div className="relative w-full bg-gray-300 rounded-md">
                  <p
                    className="bg-yellow-500 text-xs leading-none py-1 text-center rounded-tl-md rounded-bl-md text-white h-6"
                    style={{ width: `${percent2}%` }}
                  ></p>
                  <span className="absolute inset-0 text-center font-medium text-white">
                    {percent2}%
                  </span>
                </div>

                <i>
                  {option2Votes} out of {totalVotes} votes
                </i>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function calPercentage(value, total) {
  return ((value / total) * 100).toFixed(1);
}

function mapStateToProps({ polls, authedUser, users }, { id }) {
  return {
    totalVotes:
      polls[id].optionOne.votes.length + polls[id].optionTwo.votes.length,
    option1Votes: polls[id].optionOne.votes.length,
    option2Votes: polls[id].optionTwo.votes.length,
    authedUser,
  };
}

export default connect(mapStateToProps)(Answered);

import React, { Component } from "react";
import { connect } from "react-redux";

class Leaderboard extends Component {
  render() {
    const { users, leaders } = this.props;
    return (
      <div className="container mx-auto my-2">
        <h1>Leaderboard!</h1>
        <div className="flex flex-col items-center  space-y-2">
          {leaders.map((leader, key) => (
            <div
              className="flex w-4/12 border-2 border-yellow-200 space-x-5 p-5 rounded-md"
              key={leader}
            >
              <div className="border-r-2 pr-4 h-full border-yellow-400">
                <img
                  className="rounded-full"
                  src={users[leader].avatarURL}
                  alt={users[leader].name}
                  style={{ height: 100, width: 100 }}
                />
              </div>
              <div className="space-y-2">
                <h5 className="font-semibold text-xl">{users[leader].name}</h5>
                <p>Questions: {users[leader].questions.length}</p>
                <p>Answers: {Object.keys(users[leader].answers).length}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  return {
    leaders: Object.keys(users).sort(
      (a, b) =>
        Object.keys(users[b].answers).length +
        users[b].questions.length -
        (Object.keys(users[a].answers).length + users[a].questions.length)
    ),
    users,
  };
}

export default connect(mapStateToProps)(Leaderboard);

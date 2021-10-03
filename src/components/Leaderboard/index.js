import React, { Component } from "react";
import { connect } from "react-redux";

class Leaderboard extends Component {
  render() {
    const { users, leaders } = this.props;
    console.log("thsosss: ", this.props);
    return (
      <div>
        <h1>Leaderboard!</h1>
        <p>
          {leaders.map((leader) => (
            <div key={leader}>
              <img
                src={users[leader].avatarURL}
                alt={users[leader].name}
                style={{ height: 50, width: 50 }}
              />
              <h5>{users[leader].name}</h5>
              <p>Questions: {users[leader].questions.length}</p>
              <p>Answers: {Object.keys(users[leader].answers).length}</p>
            </div>
          ))}
        </p>
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

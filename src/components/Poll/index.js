import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { savePolls } from "../../actions/polls";
import { saveUser } from "../../actions/users";
import Answered from "./Answered";
import Unanswered from "./Unanswered";

class Poll extends Component {
  handleChange = (value) => {
    this.setState(() => ({
      value,
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { authedUser } = this.props;
    const { id } = this.props.match.params;
    let qid = id;
    this.props.dispatch(savePolls(id, this.state.value, authedUser));
    this.props.dispatch(saveUser(qid, this.state.value, authedUser));
  };
  render() {
    const { id } = this.props.match.params;
    const { polls, users, answeredQs, authedUser } = this.props;

    return (
      <div>
        {answeredQs.includes(id) ? (
          <Answered polls={polls} id={id} users={users} />
        ) : (
          <Unanswered
            polls={polls}
            users={users}
            id={id}
            authedUser={authedUser}
            // dispatch={this.props.dispatch}
          />
        )}
      </div>
    );
  }
}

function mapStateToProps({ polls, users, authedUser }) {
  return {
    polls,
    users,
    authedUser,
    answeredQs: authedUser ? Object.keys(users[authedUser].answers) : null,
  };
}

export default withRouter(connect(mapStateToProps)(Poll));

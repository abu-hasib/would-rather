import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { savePolls } from "../../actions/polls";
import { saveUser } from "../../actions/users";

class Poll extends Component {
  state = {
    value: "",
  };

  handleChange(e) {
    const { value } = e.target;
    this.setState(() => ({
      value,
    }));
  }

  handleSubmit(e) {
    console.log("@@@: ", this.state);
    const { id } = this.props.match.params;
    const { authedUser } = this.props;
    this.props.dispatch(savePolls(id, this.state.value, authedUser));
    this.props.dispatch(saveUser);

    e.preventDefault();
  }
  render() {
    const { id } = this.props.match.params;
    const { polls, users } = this.props;
    return (
      <div>
        <h1>Would You Rather</h1>
        <img
          src={users[polls[id].author].avatarURL}
          style={{ height: 50, width: 50 }}
          alt={polls[id].author}
        />
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <input
              type="radio"
              id="optionOne"
              name="poll"
              value="optionOne"
              onChange={(e) => this.handleChange(e)}
            />
            <label for="optionOne">{polls[id].optionOne.text}</label>
          </div>
          <div>
            <input
              type="radio"
              id="optionTwo"
              name="poll"
              value="optionTwo"
              onChange={(e) => this.handleChange(e)}
            />
            <label for="optionTwo">{polls[id].optionTwo.text}</label>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

function mapStateToProps({ polls, users, authedUser }) {
  return {
    polls,
    users,
    authedUser,
  };
}

export default withRouter(connect(mapStateToProps)(Poll));

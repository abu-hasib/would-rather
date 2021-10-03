import React, { Component } from "react";
import { connect } from "react-redux";
import { savePolls } from "../../actions/polls";
import { saveUser } from "../../actions/users";
import { _saveQuestionAnswer } from "../../utils/_DATA";

export class Unanswered extends Component {
  state = {
    value: "",
  };

  handleChange = (value) => {
    this.setState(() => ({
      value,
    }));
  };

  handleSubmit(e) {
    e.preventDefault();
    console.log("@@@: ", this.props);

    const { id, authedUser } = this.props;
    const { value } = this.state;

    console.log(`id:  ${id} -  authed: ${authedUser} - value: ${value}`);

    const payload = {
      authedUser,
      qid: id,
      answer: value,
    };

    this.props.dispatch(savePolls(id, this.state.value, authedUser));
    this.props.dispatch(saveUser(id, this.state.value, authedUser));
    _saveQuestionAnswer(payload).catch((err) => console.error("ERR:: ", err));
  }
  render() {
    const { id, users, polls } = this.props;
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
              onChange={(e) => this.handleChange(e.target.value)}
            />
            <label for="optionOne">{polls[id].optionOne.text}</label>
          </div>
          <div>
            <input
              type="radio"
              id="optionTwo"
              name="poll"
              value="optionTwo"
              onChange={(e) => this.handleChange(e.target.value)}
            />
            <label for="optionTwo">{polls[id].optionTwo.text}</label>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default connect()(Unanswered);

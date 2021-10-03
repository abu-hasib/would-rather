import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { addPoll } from "../../actions/polls";
import { formatQuestion } from "../../utils/helpers";
import { _saveQuestion } from "../../utils/_DATA";

class New extends Component {
  state = {
    optionOne: "",
    optionTwo: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { dispatch, authedUser } = this.props;
    const { optionOne, optionTwo } = this.state;
    const { history } = this.props;
    let payload = {
      optionOneText: optionOne,
      optionTwoText: optionTwo,
      author: authedUser,
    };
    let question = formatQuestion(payload);

    console.log("*****: ", authedUser);
    dispatch(addPoll(question));
    _saveQuestion(payload).then((result) => console.log("RESUTL: ", result));
    history.push("/home");
  };

  handle1stChange = (value) => {
    this.setState(() => ({ optionOne: value }));
  };

  handle2ndChange = (value) => {
    this.setState(() => ({ optionTwo: value }));
  };

  render() {
    return (
      <div>
        <h1>Would You Rather</h1>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <label>
            <input
              type="text"
              value={this.state.optionOne}
              onChange={(e) => this.handle1stChange(e.target.value)}
              placeholder="Type option one text here"
            />
          </label>
          <p>Or</p>
          <input
            type="text"
            value={this.state.optionTwo}
            onChange={(e) => this.handle2ndChange(e.target.value)}
            placeholder="Type option two text here"
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}

export default withRouter(connect(mapStateToProps)(New));

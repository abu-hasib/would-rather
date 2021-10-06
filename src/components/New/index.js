import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { handleAddPoll } from "../../actions/polls";
import { formatQuestion } from "../../utils/helpers";

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

    dispatch(handleAddPoll(question));
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
      <div className="container mx-auto">
        <div className="flex flex-col my-12 items-center space-y-6">
          <h1 className="font-semibold text-2xl leading-tight">
            Would You Rather
          </h1>
          <form
            className="flex flex-col w-4/12 items-center border-2 rounded-md
             border-yellow-200 px-4 py-5 space-y-3"
            onSubmit={(e) => this.handleSubmit(e)}
          >
            <input
              className="border-2 px-4 py-2 w-full rounded-md"
              type="text"
              value={this.state.optionOne}
              onChange={(e) => this.handle1stChange(e.target.value)}
              placeholder="Type option one text here"
            />
            <p className="font-light">OR</p>
            <input
              className="border-2 px-4 py-2 w-full rounded-md"
              type="text"
              value={this.state.optionTwo}
              onChange={(e) => this.handle2ndChange(e.target.value)}
              placeholder="Type option two text here"
            />
            <input
              className="p-2 w-full rounded-md bg-yellow-400"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
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

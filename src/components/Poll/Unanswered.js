import React, { Component } from "react";
import { connect } from "react-redux";
import { handleSavePoll } from "../../actions/polls";
import { saveUser } from "../../actions/users";

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

    const { id, authedUser, dispatch } = this.props;
    const { value } = this.state;


    const payload = {
      authedUser,
      qid: id,
      answer: value,
    };

    dispatch(saveUser(payload));
    dispatch(handleSavePoll(payload));

    // this.props.dispatch(savePolls(id, this.state.value, authedUser));
    // this.props.dispatch(saveUser(id, this.state.value, authedUser));
    // _saveQuestionAnswer(payload).catch((err) => console.error("ERR:: ", err));
  }
  render() {
    const { id, users, polls } = this.props;
    return (
      <div className="max-w-sm py-1">
        <div className="bg-white relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg">
          <img
            className="rounded-t-lg"
            src={users[polls[id].author].avatarURL}
            alt=""
          />
          <div className="py-6 px-8 rounded-lg bg-white">
            <h1 className="text-gray-700 font-bold text-2xl mb-3 hover:text-gray-900 hover:cursor-pointer">
              Would you rather
            </h1>
            <form onSubmit={(e) => this.handleSubmit(e)}>
              <label className="flex space-x-2 radio py-2 cursor-pointer">
                <input
                  className=""
                  type="radio"
                  id="optionOne"
                  name="poll"
                  value="optionOne"
                  onChange={(e) => this.handleChange(e.target.value)}
                />
                <div className="text-lg" for="optionOne">
                  {polls[id].optionOne.text}
                </div>
              </label>
              <label className="flex space-x-2 radio py-2 cursor-pointer">
                <input
                  type="radio"
                  id="optionTwo"
                  name="poll"
                  value="optionTwo"
                  onChange={(e) => this.handleChange(e.target.value)}
                />
                <div className="text-lg" for="optionTwo">
                  {polls[id].optionTwo.text}
                </div>
              </label>
              <button
                className="mt-4 py-2 px-4 w-full bg-yellow-400 text-gray-800 font-bold rounded-md shadow-md hover:shadow-lg transition duration-300"
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(Unanswered);

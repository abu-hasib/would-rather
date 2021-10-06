import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";

class Polls extends Component {
  render() {
    const { users, polls, questions } = this.props;
    return (
      <div>
        <ul className="min-h-screen space-y-12 py-10">
          {questions.map((key) => (
            <div key={key} className="container mx-auto">
              <div className="bg-white max-w-sm mx-auto rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-100 cursor-pointer">
                <div className="h-20 bg-yellow-500 flex items-center justify-between">
                  <div className="flex items-center">
                    <img
                      className="ml-4 mr-1 border-2 rounded-full h-10 w-10"
                      src={users[polls[key].author].avatarURL}
                      alt={users[polls[key].author].name}
                    />
                    <p class="mr-10 min-w-max text-gray-50 text-lg">
                      {users[polls[key].author].name} asks:
                    </p>
                  </div>

                  <p class="mr-4 text-white font-thin text-lg italic min-w-max">
                    {new Date(polls[key].timestamp).toDateString()}
                  </p>
                </div>

                <p class="py-6 text-lg tracking-wide ml-16">
                  ...{polls[key].optionOne.text}
                </p>
                <div class="flex justify-center px-5 mb-2 text-sm text-gray-600">
                  <Link
                    className="mt-6 mb-2 py-2 px-4 bg-yellow-500 text-gray-50 font-bold rounded-lg shadow-md transform hover:shadow-lg transition duration-300 hover:scale-105"
                    to={`questions/${key}`}
                  >
                    View Poll
                  </Link>
                </div>
              </div>
            </div>
            // <li key={key}>
            //   <i>{new Date(polls[key].timestamp).toDateString()}</i>
            //   <h3>{polls[key].author} asks: </h3>
            //   <p>{polls[key].optionOne.text} </p>
            //   <Link to={`questions/${key}`}>View Poll</Link>
            // </li>
          ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps({ users, authedUser }) {
  return {
    users,
    authedUser,
  };
}

export default withRouter(connect(mapStateToProps)(Polls));

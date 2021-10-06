import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { setAuthedUser } from "../../actions/users";

class Login extends Component {
  state = {
    value: null,
  };
  handleChange(value) {
    this.setState(() => ({
      value,
    }));
  }

  handleSubmit(e) {
    let { value } = e.target[0];
    let { location, history } = this.props;
    let { from } = location.state || { from: { pathname: "/" } };

    this.props.dispatch(setAuthedUser(value));
    history.replace(from);
    e.preventDefault();
  }

  render() {
    const { users } = this.props;
    return (
      <div
        className="min-h-screen bg-no-repeat bg-cover bg-center relative inset-0"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1616593437252-0631aeb95590?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80)",
        }}
      >
        <div className="absolute bg-gradient-to-b from-yellow-500 to-yellow-400 opacity-75 inset-0 z-0"></div>
        <div className="sm:flex sm:flex-row mx-0 justify-center py-48">
          <div className="flex-col flex self-center p-10 sm:max-w-5xl xl:max-w-2xl z-10">
            <div className="self-start hidden lg:flex flex-col  text-black">
              <h1 className="mb-3 font-bold text-5xl">👋 Would You Rather</h1>
              {/* <p className="pr-3">
                Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries for previewing layouts and
                visual mockups
              </p> */}
            </div>
          </div>
          <div className="flex justify-center self-center  z-10">
            <div className="p-12 bg-white mx-auto rounded-md w-100 ">
              <div className="mb-4">
                <h3 className="font-semibold text-2xl text-gray-800">Login</h3>
                <p className="text-gray-500">Please login to continue.</p>
              </div>
              <form onSubmit={(e) => this.handleSubmit(e)}>
                <div className="space-y-5">
                  <select
                    className="w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                    value={this.state.value}
                    onChange={(e) => this.handleChange(e.target.value)}
                  >
                    <option value="" selected>
                      Select a user to login
                    </option>
                    {Object.keys(users).map((key) => (
                      <option key={key} value={key}>
                        {users[key].name}
                      </option>
                    ))}
                  </select>
                  <div>
                    <input
                      type="submit"
                      value="Submit"
                      className="w-full flex justify-center bg-yellow-400  hover:bg-yellow-500 text-gray-100 p-3  rounded-md tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
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

export default withRouter(connect(mapStateToProps)(Login));

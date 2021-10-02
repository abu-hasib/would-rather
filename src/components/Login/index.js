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
      <div>
        <h1>Login page</h1>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <select
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
          <input type="submit" value="Submit" />
        </form>
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

import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Route, Switch, withRouter } from "react-router-dom";
import Poll from "../Poll";
import Polls from "../Polls";

class Home extends Component {
  render() {
    const { polls, answeredQs, unansweredQs } = this.props;
    const { url, path } = this.props.match;
    console.log("@@@: ", answeredQs);
    return (
      <div>
        <h1>Home!</h1>
        <ul>
          <li>
            <Link to={`${url}/unanswered`}>Unanswered</Link>
          </li>
          <li>
            <Link to={`${url}/answered`}>Answered</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path={`${path}/unanswered`}>
            <Polls
              polls={polls}
              questions={unansweredQs}
              title="Unanswered Questions"
            />
          </Route>
          <Route path={`${path}/answered`}>
            <Polls
              polls={polls}
              questions={answeredQs}
              title="Answered Questions"
            />
          </Route>
          <Route path={`${url}/questions/:id`}>
            <Poll />
          </Route>
        </Switch>

        {/* <h2>Answered Questions</h2>
        {Object.keys(answeredQs).map((key) => (
          <div>
            <hr />
            <h3>{polls[key].author} asks: </h3>
            <p>{polls[key].optionOne.text} </p>
          </div>
        ))} */}
      </div>
    );
  }
}

function mapStateToProps({ polls, users, authedUser }) {
  const answers = authedUser ? Object.keys(users[authedUser].answers) : [];
  const questions = Object.keys(polls);

  console.log("###: ", answers);
  console.log("$$$: ", questions);

  return {
    polls: polls,
    answeredQs: authedUser
      ? Object.keys(users[authedUser].answers).sort(
          (a, b) => polls[b].timestamp - polls[a].timestamp
        )
      : null,
    unansweredQs: questions
      .filter((question) => !answers.includes(question))
      .sort((a, b) => polls[b].timestamp - polls[a].timestamp),
  };
}

export default withRouter(connect(mapStateToProps)(Home));

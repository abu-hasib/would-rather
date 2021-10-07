import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Switch, withRouter } from "react-router-dom";
import FourO4 from "../../FourO4";
import { MenuLink } from "../../global/components/MenuLink";
import Poll from "../Poll";
import Polls from "../Polls";

class Home extends Component {
  componentDidMount() {
    const { history } = this.props;
    history.location.pathname === "/" && history.push("/unanswered");
  }
  componentDidUpdate() {
    const { history } = this.props;
    history.location.pathname === "/" && history.push("/unanswered");
  }

  render() {
    const { polls, answeredQs, unansweredQs } = this.props;
    const { url, path } = this.props.match;
    const { pathname } = this.props.history.location;

    return (
      <div className="container mx-auto">
        <div className="pt-6 flex content-center items-center justify-center min-h-screen-75">
          {(pathname === "/unanswered" || pathname === "/answered") && (
            <nav class="flex flex-col sm:flex-row space-x-5">
              <MenuLink
                activeOnlyWhenExact={true}
                label="Unanswered"
                to={`${path}unanswered`}
              ></MenuLink>
              <MenuLink label="Answered" to={`${path}answered`}></MenuLink>
            </nav>
          )}
        </div>
        <div className="pt-10 flex items-center justify-center content-center">
          <Switch>
            <Route exact path={`${path}unanswered`}>
              <Polls
                polls={polls}
                questions={unansweredQs}
                title="Unanswered Questions"
              />
            </Route>
            <Route path={`${path}answered`}>
              <Polls
                polls={polls}
                questions={answeredQs}
                title="Answered Questions"
              />
            </Route>
            <Route path={`${url}questions/:id`}>
              <Poll />
            </Route>
            <Route path={`${url}questions`}></Route>
            <Route path="*">
              <FourO4 />
            </Route>
          </Switch>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ polls, users, authedUser }) {
  const answers = authedUser ? Object.keys(users[authedUser].answers) : [];
  const questions = Object.keys(polls);

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

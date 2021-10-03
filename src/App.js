import { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import handleInitData from "./actions/shared";
import "./App.css";
import Home from "./components/Home";
import Leaderboard from "./components/Leaderboard";
import Login from "./components/Login";
import New from "./components/New";
import AuthButton from "./global/components/AuthButton";
import PrivateRoute from "./global/components/PrivateRoute";
import { ProvideAuth } from "./utils/helpers";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitData());
  }
  render() {
    return (
      <div className="App">
        <ProvideAuth>
          <Router>
            <AuthButton />
            <div>
              <nav>
                <ul>
                  <li>
                    <Link to="/home">Home</Link>
                  </li>
                  <li>
                    <Link to="/">Users</Link>
                  </li>
                  <li>
                    <Link to="/leaderboard">Leaderboard</Link>
                  </li>
                  <li>
                    <Link to="/add">Add a new poll</Link>
                  </li>
                </ul>
              </nav>

              {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
              <Switch>
                <PrivateRoute path="/home">
                  <Home />
                </PrivateRoute>
                <Route path="/login">
                  <Login />
                </Route>
                <Route path="/leaderboard">
                  <Leaderboard />
                </Route>
                <PrivateRoute path="/add">
                  <New />
                </PrivateRoute>
              </Switch>
            </div>
          </Router>
        </ProvideAuth>
      </div>
    );
  }
}

export default connect()(App);

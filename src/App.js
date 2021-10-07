import { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FourO4 from "./FourO4";
import handleInitData from "./actions/shared";
import Home from "./components/Home";
import Leaderboard from "./components/Leaderboard";
import Login from "./components/Login";
import New from "./components/New";
import PrivateRoute from "./global/components/PrivateRoute";
import { ProvideAuth } from "./utils/helpers";
import Navigation from "./components/Navigation";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitData());
  }
  render() {
    return (
      <div>
        <ProvideAuth>
          <Router>
            <div>
              <Navigation />
              {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
              <Switch>
                {/* <PrivateRoute path="/home">
                  <Home />
                </PrivateRoute> */}
                <Route path="/login">
                  <Login />
                </Route>
                <PrivateRoute path="/leaderboard">
                  <Leaderboard />
                </PrivateRoute>
                <PrivateRoute path="/add">
                  <New />
                </PrivateRoute>
                <Route path="/error">
                  <FourO4 />
                </Route>

                <PrivateRoute path="/">
                  <Home />
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

import { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import handleInitData from "./actions/shared";
import "./App.css";
import About from "./components/About";
import Login from "./components/Login";
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
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/users">Users</Link>
                  </li>
                  <li>
                    <Link to="/protected">Protected</Link>
                  </li>
                </ul>
              </nav>

              {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
              <Switch>
                <PrivateRoute path="/about">
                  <About />
                </PrivateRoute>
                <Route path="/login">
                  <Login />
                </Route>
                <Route path="/">
                  <Home />
                </Route>
              </Switch>
            </div>
          </Router>
        </ProvideAuth>
      </div>
    );
  }
}

function Home() {
  return <div>Home!</div>;
}

function mapStateToProps(state) {
  console.log("<App state:/>: ", state);
}

export default connect(mapStateToProps)(App);

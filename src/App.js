import React, { Component } from "react";
import { Route } from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile";
import Nav from "./Nav";
import Auth from "./Auth/Auth";
import Callback from "./Callback";
import Public from "./Public";
import Private from "./Private";
import PrivateRoute from "./PrivateRoute";
import AuthContext from "./AuthContext";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "./theme/theme";
import { GlobalStyles } from "./theme/global";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: new Auth(this.props.history),
      tokenRenewalComplete: false,
    };
  }

  //componentDidMount() {
  // this.state.auth.renewToken(() =>
  //  this.setState({ tokenRenewalComplete: true })
  //);
  // }

  render() {
    const { auth } = this.state;
    // Show loading message until the token renewal check is completed.
    //if (!this.state.tokenRenewalComplete) return "Loading...";
    return (
      <AuthContext.Provider value={auth}>
        <ThemeProvider theme={darkTheme}>
          <GlobalStyles />
          <Nav auth={auth} />
          <div className="body background">
            <Route
              path="/"
              exact
              render={(props) => <Home auth={auth} {...props} />}
            />
            <Route
              path="/callback"
              render={(props) => <Callback auth={auth} {...props} />}
            />
            <PrivateRoute path="/profile" component={Profile} />
            <Route path="/public" component={Public} />
            <PrivateRoute path="/private" component={Private} />
          </div>
        </ThemeProvider>
      </AuthContext.Provider>
    );
  }
}

export default App;

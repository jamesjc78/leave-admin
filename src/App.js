import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginForm from "./components/login/login";
import Home from "./components/home/home";
import { withRouter } from "./withRouter";

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const loginValid = (states) => {
  let valid = true;
  const loginError = states.loginError;
  const username = states.email;
  const password = states.password;

  // validate form errors being empty
  Object.values(loginError).forEach((val) => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  username === null && (valid = false);
  password === null && (valid = false);

  return valid;
};

class App extends React.Component {
  state = {
    name: null, //user information
    email: null,
    position: null,
    password: null,
    employees: [], // list of employees
    loginError: {
      userError: "", // login error messages
      passwordError: "",
    },
    authorized: false,
  };

  //
  handleLogin = (event) => {
    event.preventDefault();
    if (loginValid(this.state)) {
      this.setState({ authorized: true });
      this.props.navigate("/user");
    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
  };

  handleLoginChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let loginError = { ...this.state.loginError };

    switch (name) {
      case "email":
        loginError.userError = emailRegex.test(value)
          ? ""
          : "invalid email address";
        break;
      case "password":
        loginError.passwordError =
          value.length < 6 ? "minimum 6 characters required" : "";
        break;
      default:
        break;
    }

    this.setState({ loginError, [name]: value }, () => console.log(this.state));
  };

  render() {
    return (
      <Routes>
        <Route
          path="/"
          element={
            <LoginForm
              onLogin={this.handleLogin}
              onLoginChange={this.handleLoginChange}
              loginError={this.state.loginError}
            />
          }
        />
        <Route
          path="/user"
          element={<Home authorized={this.state.authorized} />}
        />
      </Routes>
    );
  }
}

export default withRouter(App);

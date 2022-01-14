import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginForm from "./components/login/login";
import Home from "./components/home/home";
import Leave from "./components/leave/leave";
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
    employees: [
      // list of employees
      {
        name: "J.C. James Arcilla",
        email: "jla@noaya.no",
        position: "Software Developer",
        password: null,
      },
      {
        name: "Vince Elizaga",
        email: "vne@noaya.no",
        position: "Software & System Engineer",
        password: null,
      },
      {
        name: "Kenji Mille Grava",
        email: "kmg@noaya.no",
        position: "Software Developer",
        password: null,
      },
    ],
    leaves: [
      // list of leaves
      {
        email: "kmg@noaya.no",
        date: Date(2022, 0, 14),
        type: "Sick",
        notes: "Headache and Fever",
      },
      {
        email: "kmg@noaya.no",
        date: Date(2022, 5, 10),
        type: "Vacation",
        notes: "N/A",
      },
      {
        email: "kmg@noaya.no",
        date: Date(2022, 0, 12),
        type: "Emergency",
        notes: "Family Emergency",
      },
      {
        email: "jla@noaya.no",
        date: Date(2022, 0, 12),
        type: "Sick",
        notes: "Headache and Fever",
      },
    ],
    loginError: {
      userError: "", // login error messages
      passwordError: "",
    },
    authorized: false,
  };

  // Login Handlers
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

  // Home Handlers
  handleUserRowClick = (email) => {
    this.props.navigate(`/user/${email}`);
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
          element={
            <Home states={this.state} onRowClick={this.handleUserRowClick} />
          }
        />
        <Route path="/user/:email" element={<Leave states={this.state} />} />
      </Routes>
    );
  }
}

export default withRouter(App);

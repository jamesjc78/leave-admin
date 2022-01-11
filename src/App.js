import React from "react";
import LoginForm from "./components/LoginForm";

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const loginValid = ({ loginError, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(loginError).forEach((val) => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach((val) => {
    val === null && (valid = false);
  });

  return valid;
};

class App extends React.Component {
  state = {
    name: null,
    email: null,
    position: null,
    password: null,
    employees: [],
    loginError: {
      userError: "",
      passwordError: "",
    },
  };

  handleLogin = (event) => {
    event.preventDefault();
    if (loginValid(this.state)) {
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
      <React.Fragment>
        {loginValid(this.state) ? ( //display dashboard
          <div className="welcome">
            <h2>
              Welcome,<span>{this.state.name}</span>
            </h2>
            <button className="logout">Logout</button>
          </div>
        ) : (
          <LoginForm
            onLogIn={this.handleLogin}
            onLoginChange={this.handleLoginChange}
            loginError={this.state.loginError}
          /> // display login form
        )}
      </React.Fragment>
    );
  }
}

export default App;

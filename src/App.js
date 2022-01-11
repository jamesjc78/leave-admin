import React from "react";
import LoginForm from "./components/LoginForm";
class App extends React.Component {
  state = {
    user: {
      name: "",
      email: "",
      position: "",
      password: "",
    },
    employees: [],
    loginError: {
      userError: "",
      passwordError: "",
    },
  };

  handleLogin = () => {};

  render() {
    return (
      <React.Fragment>
        {this.state.user.email !== "" ? ( //display dashboard
          <div className="welcome">
            <h2>
              Welcome,<span>{this.state.user.name}</span>
            </h2>
            <button className="logout">Logout</button>
          </div>
        ) : (
          <LoginForm logIn={this.handleLogin} /> // display login form
        )}
      </React.Fragment>
    );
  }
}

export default App;

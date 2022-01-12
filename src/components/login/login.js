import React, { Component } from "react";

class LoginForm extends React.Component {
  render() {
    const { loginError, onLogin, onLoginChange } = this.props;
    return (
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-6 col-md-3">
            <img
              src="https://www.noaya.no/assets/images/common/noaya-logo-menu.png"
              alt=""
              className="logo"
            ></img>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12 col-sm-6 col-md-3 ">
            <form
              className="my-container shadow bg-white"
              onSubmit={(event) => onLogin(event)}
              noValidate
            >
              <div className="form-group">
                <label htmlFor="email">Username</label>
                <input
                  type="email"
                  className="form-control border-0"
                  id="email"
                  name="email"
                  placeholder="Username"
                  aria-describedby="emailHelp"
                  noValidate
                  onChange={(event) => onLoginChange(event)}
                ></input>
                {loginError.userError.length > 0 && (
                  <small className="text-danger">{loginError.userError}</small>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control border-0"
                  placeholder="Password"
                  id="password"
                  name="password"
                  noValidate
                  onChange={(event) => onLoginChange(event)}
                ></input>
                {loginError.passwordError.length > 0 && (
                  <small className="text-danger">
                    {loginError.passwordError}
                  </small>
                )}
              </div>
              <div>
                <button
                  type="submit"
                  className="btn btn-primary main-btn col-10"
                >
                  Log in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginForm;

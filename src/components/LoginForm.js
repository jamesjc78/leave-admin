import React, { Component } from "react";

class LoginForm extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-6 col-md-3">
            <img
              src="https://www.noaya.no/assets/images/common/noaya-logo-menu.png"
              className="logo"
            ></img>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12 col-sm-6 col-md-3 ">
            <form
              className="my-container border border-primary"
              onSubmit={() => this.props.onSubmit()}
              noValidate
            >
              <div className="form-group">
                <label htmlFor="email">Username</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="Username"
                  aria-describedby="emailHelp"
                  noValidate
                  onChange={(event) => this.props.onLoginChange(event)}
                ></input>
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  id="password"
                  name="password"
                  noValidate
                  onChange={(event) => this.props.onLoginChange(event)}
                ></input>
              </div>
              <button
                type="submit"
                className="btn main-btn btn-primary btn-block"
              >
                Log in
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginForm;

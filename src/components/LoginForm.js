import React, { Component } from "react";

class LoginForm extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-6 col-md-3 ">
            <form className="my-container border border-primary">
              <div class="form-group">
                <label for="exampleInputEmail1">Username</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  placeholder="Username"
                  aria-describedby="emailHelp"
                ></input>
              </div>
              <div className="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  id="exampleInputPassword1"
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

import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import { withRouter } from "../../withRouter";
class Home extends React.Component {
  render() {
    const { authorized } = this.props;
    if (!authorized) return <Navigate to="/" />;
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <button className="btn btn-primary float-end add-employee my-button">
              + Add Employee
            </button>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-48 col-sm-24 col-md-12 ">
            <table className="table table-striped rounded">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Email</th>
                  <th scope="col">Full Name</th>
                  <th scope="col">Position</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-8 col-sm-4  col-md-2 ">
            <button className="btn btn-primary add-employee">Show More</button>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(Home);

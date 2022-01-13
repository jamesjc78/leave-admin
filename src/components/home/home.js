import React from "react";
import { Navigate } from "react-router-dom";
import { withRouter } from "../../withRouter";

// sorting data
const mySort = (arr, sortBy) => {
  arr.sort((a, b) => (a[sortBy] > b[sortBy] ? 1 : -1));
};

class Home extends React.Component {
  render() {
    const { authorized, employees } = this.props.states;
    mySort(employees, "email");
    let counter = 1;
    if (!authorized) return <Navigate to="/" />;
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <button className="btn btn-primary float-end add-employee ">
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
                {employees.map((employee) => (
                  <tr
                    key={employee.email}
                    id={employee.email}
                    onClick={(event) => this.props.onRowClick(event)}
                  >
                    <th scope="row">{counter++}</th>
                    <td>{employee.email}</td>
                    <td>{employee.name}</td>
                    <td>{employee.position}</td>
                  </tr>
                ))}
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

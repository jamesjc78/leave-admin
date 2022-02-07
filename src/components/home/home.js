import React from "react";
import { Navigate } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";

// sorting data
const mySort = (arr, sortBy) => {
  arr.sort((a, b) => (a[sortBy] > b[sortBy] ? 1 : -1));
};

function Home({ authorized, employees, modalShowAdd, onRowClick, showModal }) {
  mySort(employees, "email");
  let counter = 1;
  if (!authorized) return <Navigate to="/" />;
  return (
    <div className="container-fluid">
      <Modal
        show={modalShowAdd}
        aria-labelledby="contained-modal-title-vcenter"
        backdrop="static"
        centered
        onHide={() => showModal(false)}
      >
        <form noValidate>
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Add User
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control border-0"
                id="email"
                name="email"
                placeholder="Email"
                noValidate
                // onChange={(event) => onLoginChange(event)}
              ></input>
              {/* {loginError.userError.length > 0 && (
                <small className="text-danger">{loginError.userError}</small>
              )} */}
            </div>
            <div className="form-group">
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                className="form-control border-0"
                id="fullname"
                name="fullname"
                placeholder="Full Name"
                noValidate
                // onChange={(event) => onLoginChange(event)}
              ></input>
              {/* {loginError.userError.length > 0 && (
                <small className="text-danger">{loginError.userError}</small>
              )} */}
            </div>
            <div className="form-group">
              <label htmlFor="position">Position</label>
              <input
                type="text"
                className="form-control border-0"
                id="position"
                name="position"
                placeholder="Position"
                noValidate
                // onChange={(event) => onLoginChange(event)}
              ></input>
              {/* {loginError.userError.length > 0 && (
                <small className="text-danger">{loginError.userError}</small>
              )} */}
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="text"
                className="form-control border-0"
                id="password"
                name="password"
                placeholder="Password"
                noValidate
                // onChange={(event) => onLoginChange(event)}
              ></input>
              {/* {loginError.userError.length > 0 && (
                <small className="text-danger">{loginError.userError}</small>
              )} */}
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button type="submit" className="btn btn-primary">
              Save
            </Button>
            <Button
              className="btn btn-secondary"
              onClick={() => showModal(false)}
            >
              Cancel
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
      <div className="row">
        <div className="col">
          <button
            className="btn btn-primary float-end add-employee "
            onClick={() => showModal(true)}
          >
            + Add User
          </button>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-48 col-sm-24 col-md-12 ">
          <table className="table table-striped table-hover rounded">
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
                  onClick={() => onRowClick(employee.email)}
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
export default Home;

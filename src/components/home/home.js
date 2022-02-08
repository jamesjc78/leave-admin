import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";
import { HandleUserRowClick } from "./home.handler";
import { mySort } from "./home.functions";
import { getUsers } from "../../endpoints/user";

function Home() {
  const [modalShowAdd, setModalShowAdd] = useState(false);
  const [employees, setemployees] = useState([]);
  mySort(employees, "email");
  let counter = 1;
  const navigate = useNavigate();
  useEffect(() => {
    // checking access token
    if (localStorage.getItem("accessToken") == null) {
      navigate("/");
    }
    getUsers().then((body) => {
      if (body.authmessage) {
        if (body.authmessage == "access token expired!")
          localStorage.removeItem("accessToken");
        navigate("/");
      }
      if (!body.status && body.data) setemployees(body.data);
    });
  }, []);

  return (
    <div className="container-fluid">
      <Modal
        show={modalShowAdd}
        aria-labelledby="contained-modal-title-vcenter"
        backdrop="static"
        centered
        onHide={() => setModalShowAdd(false)}
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
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                className="form-control border-0"
                id="firstname"
                name="firstname"
                placeholder="First Name"
                noValidate
                // onChange={(event) => onLoginChange(event)}
              ></input>
              {/* {loginError.userError.length > 0 && (
                <small className="text-danger">{loginError.userError}</small>
              )} */}
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                className="form-control border-0"
                id="lastname"
                name="lastname"
                placeholder="Last Name"
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
              onClick={() => setModalShowAdd(false)}
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
            onClick={() => setModalShowAdd(true)}
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
                  key={employee.username}
                  id={employee.username}
                  onClick={() =>
                    HandleUserRowClick(employee.username, navigate)
                  }
                >
                  <th scope="row">{counter++}</th>
                  <td>{employee.username}</td>
                  <td>{employee.firstName + " " + employee.lastName}</td>
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

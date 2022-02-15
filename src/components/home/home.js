import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";
import {
  HandleUserRowClick,
  HandleAddUser,
  HandleAddUserChange,
} from "./home.handler";
import { mySort } from "./home.functions";
import { getUsers } from "../../endpoints/user";

const Home = () => {
  const [username, setUsername] = useState(null);
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [position, setPosition] = useState(null);
  const [password, setPassword] = useState(null);
  const [addError, setAddError] = useState({
    userError: "", // add user error messages
    firstNameError: "",
    lastNameError: "",
    positionError: "",
    passwordError: "",
  });
  const [modalShowAdd, setModalShowAdd] = useState(false);
  const [employees, setemployees] = useState([]);
  let counter = 1;
  const navigate = useNavigate();

  useEffect(() => {
    // checking access token
    if (localStorage.getItem("accessToken") == null) {
      navigate("/");
    }
    getUsers().then((body) => {
      console.log("triggered");
      if (body.authmessage) {
        if (body.authmessage == "access token expired!")
          localStorage.removeItem("accessToken");
        navigate("/");
      }

      if (!body.status && body.data) {
        mySort(body.data, "username");
        setemployees(body.data);
      }
    });
  }, [modalShowAdd]);

  return (
    <div className="container-fluid">
      <Modal
        show={modalShowAdd}
        aria-labelledby="contained-modal-title-vcenter"
        backdrop="static"
        centered
        onHide={() => {
          setModalShowAdd(false);
          setAddError({
            userError: "",
            firstNameError: "",
            lastNameError: "",
            positionError: "",
            passwordError: "",
          });
        }}
      >
        <form
          onSubmit={(event) =>
            HandleAddUser(
              event,
              addError,
              username,
              firstName,
              lastName,
              position,
              password,
              setModalShowAdd
            )
          }
          noValidate
        >
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
                onBlur={(event) =>
                  HandleAddUserChange(
                    event,
                    addError,
                    setUsername,
                    setFirstName,
                    setLastName,
                    setPosition,
                    setPassword,
                    setAddError
                  )
                }
                onChange={(event) =>
                  HandleAddUserChange(
                    event,
                    addError,
                    setUsername,
                    setFirstName,
                    setLastName,
                    setPosition,
                    setPassword,
                    setAddError
                  )
                }
              ></input>
              {addError.userError.length > 0 && (
                <small className="text-danger">{addError.userError}</small>
              )}
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
                onBlur={(event) =>
                  HandleAddUserChange(
                    event,
                    addError,
                    setUsername,
                    setFirstName,
                    setLastName,
                    setPosition,
                    setPassword,
                    setAddError
                  )
                }
                onChange={(event) =>
                  HandleAddUserChange(
                    event,
                    addError,
                    setUsername,
                    setFirstName,
                    setLastName,
                    setPosition,
                    setPassword,
                    setAddError
                  )
                }
              ></input>
              {addError.firstNameError.length > 0 && (
                <small className="text-danger">{addError.firstNameError}</small>
              )}
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
                onBlur={(event) =>
                  HandleAddUserChange(
                    event,
                    addError,
                    setUsername,
                    setFirstName,
                    setLastName,
                    setPosition,
                    setPassword,
                    setAddError
                  )
                }
                onChange={(event) =>
                  HandleAddUserChange(
                    event,
                    addError,
                    setUsername,
                    setFirstName,
                    setLastName,
                    setPosition,
                    setPassword,
                    setAddError
                  )
                }
              ></input>
              {addError.lastNameError.length > 0 && (
                <small className="text-danger">{addError.lastNameError}</small>
              )}
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
                onBlur={(event) =>
                  HandleAddUserChange(
                    event,
                    addError,
                    setUsername,
                    setFirstName,
                    setLastName,
                    setPosition,
                    setPassword,
                    setAddError
                  )
                }
                onChange={(event) =>
                  HandleAddUserChange(
                    event,
                    addError,
                    setUsername,
                    setFirstName,
                    setLastName,
                    setPosition,
                    setPassword,
                    setAddError
                  )
                }
              ></input>
              {addError.positionError.length > 0 && (
                <small className="text-danger">{addError.positionError}</small>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control border-0"
                id="password"
                name="password"
                placeholder="Password"
                noValidate
                onChange={(event) =>
                  HandleAddUserChange(
                    event,
                    addError,
                    setUsername,
                    setFirstName,
                    setLastName,
                    setPosition,
                    setPassword,
                    setAddError
                  )
                }
              ></input>
              {addError.passwordError.length > 0 && (
                <small className="text-danger">{addError.passwordError}</small>
              )}
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button type="submit" className="btn btn-primary">
              Save
            </Button>
            <Button
              className="btn btn-secondary"
              onClick={() => {
                setModalShowAdd(false);
                setAddError({
                  userError: "",
                  firstNameError: "",
                  lastNameError: "",
                  positionError: "",
                  passwordError: "",
                });
              }}
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
            onClick={() => {
              setModalShowAdd(true);
              setAddError({
                userError: "",
                firstNameError: "",
                lastNameError: "",
                positionError: "",
                passwordError: "",
              });
            }}
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
      {/* <div className="row justify-content-center">
        <div className="col-8 col-sm-4  col-md-2 ">
          <button className="btn btn-primary add-employee">Show More</button>
        </div>
      </div> */}
    </div>
  );
};
export default Home;

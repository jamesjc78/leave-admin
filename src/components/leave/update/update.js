import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { HandleUpdateUserChange, HandleUpdateUser } from "./update.handler";

const UpdateUser = ({
  modalShowUpdate,
  setModalShowUpdate,
  employee,
  setEmployee,
}) => {
  const [firstName, setFirstName] = useState(employee.firstName);
  const [lastName, setLastName] = useState(employee.lastName);
  const [position, setPosition] = useState(employee.position);
  const [updateError, setUpdateError] = useState({
    // add user error messages
    firstNameError: "",
    lastNameError: "",
    positionError: "",
  });
  useEffect(() => {
    setFirstName(employee.firstName);
    setLastName(employee.lastName);
    setPosition(employee.position);
  }, [employee]);
  return (
    <Modal
      show={modalShowUpdate}
      aria-labelledby="contained-modal-title-vcenter"
      backdrop="static"
      centered
      onHide={() => {
        setModalShowUpdate(false);
        setFirstName("");
        setLastName("");
        setPosition("");
        setUpdateError({
          firstNameError: "",
          lastNameError: "",
          positionError: "",
        });
      }}
    >
      <form
        onSubmit={(event) =>
          HandleUpdateUser(
            event,
            employee.username,
            firstName,
            lastName,
            position,
            setEmployee
          )
        }
        noValidate
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Update User
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
              defaultValue={employee.username}
              noValidate
              disabled
            ></input>
          </div>
          <div className="form-group">
            <label htmlFor="firstname">First Name</label>
            <input
              type="text"
              className="form-control border-0"
              id="firstname"
              name="firstname"
              placeholder="First Name"
              value={firstName}
              noValidate
              onBlur={(event) =>
                HandleUpdateUserChange(
                  event,
                  updateError,
                  setFirstName,
                  setLastName,
                  setPosition,
                  setUpdateError
                )
              }
              onChange={(event) =>
                HandleUpdateUserChange(
                  event,
                  updateError,
                  setFirstName,
                  setLastName,
                  setPosition,
                  setUpdateError
                )
              }
            ></input>
            {updateError.firstNameError.length > 0 && (
              <small className="text-danger">
                {updateError.firstNameError}
              </small>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="lastname">Last Name</label>
            <input
              type="text"
              className="form-control border-0"
              id="lastname"
              name="lastname"
              placeholder="Last Name"
              value={lastName}
              noValidate
              onBlur={(event) =>
                HandleUpdateUserChange(
                  event,
                  updateError,
                  setFirstName,
                  setLastName,
                  setPosition,
                  setUpdateError
                )
              }
              onChange={(event) =>
                HandleUpdateUserChange(
                  event,
                  updateError,
                  setFirstName,
                  setLastName,
                  setPosition,
                  setUpdateError
                )
              }
            ></input>
            {updateError.lastNameError.length > 0 && (
              <small className="text-danger">{updateError.lastNameError}</small>
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
              value={position}
              noValidate
              onBlur={(event) =>
                HandleUpdateUserChange(
                  event,
                  updateError,
                  setFirstName,
                  setLastName,
                  setPosition,
                  setUpdateError
                )
              }
              onChange={(event) =>
                HandleUpdateUserChange(
                  event,
                  updateError,
                  setFirstName,
                  setLastName,
                  setPosition,
                  setUpdateError
                )
              }
            ></input>
            {updateError.positionError.length > 0 && (
              <small className="text-danger">{updateError.positionError}</small>
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
              setModalShowUpdate(false);
              setFirstName("");
              setLastName("");
              setPosition("");
              setUpdateError({
                firstNameError: "",
                lastNameError: "",
                positionError: "",
              });
            }}
          >
            Cancel
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
};

export default UpdateUser;

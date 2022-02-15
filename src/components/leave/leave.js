import React from "react";
import { useParams, Navigate } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";

// sorting data
const mySort = (arr, sortBy) => {
  arr.sort((a, b) => (a[sortBy] > b[sortBy] ? 1 : -1));
};

const Leave = ({
  authorized,
  employees,
  leaves,
  modalShowDelete,
  showModal,
}) => {
  const { email } = useParams();
  const employeeDetail = employees.find((x) => x.email === email);
  const arrayMonth = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  if (!authorized) return <Navigate to="/" />;
  let employeeLeaves = [];
  leaves.map((leave) => {
    if (leave.email === email) {
      employeeLeaves.push(leave);
    }
  });
  mySort(employeeLeaves, "date");
  let counter = 1;
  return (
    <div className="container-fluid">
      <Modal
        show={modalShowDelete}
        aria-labelledby="contained-modal-title-vcenter"
        backdrop="static"
        centered
        onHide={() => showModal(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Delete User
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Are you sure you want to delete <i>{employeeDetail.name} </i>?
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button className="btn btn-danger">Delete User</Button>
          <Button
            className="btn btn-secondary"
            onClick={() => showModal(false)}
          >
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="row">
        <div className="col">
          <p className="font-weight-bold margin-head">
            {employeeDetail.name} ({employeeDetail.position})
          </p>
          <p>
            Total Leaves ({new Date().getFullYear()}) : {employeeLeaves.length}
          </p>
        </div>
        <div className="col ">
          <button
            className="btn btn-danger float-end delete-employee"
            onClick={() => showModal(true)}
          >
            Delete User
          </button>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-48 col-sm-24 col-md-12 ">
          <table className="table table-striped rounded">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Date</th>
                <th scope="col">Type</th>
                <th scope="col">Notes</th>
              </tr>
            </thead>
            <tbody>
              {employeeLeaves.map((leave) => (
                <tr key={counter}>
                  <th scope="row">{counter++}</th>
                  <td>
                    {arrayMonth[new Date(leave?.date).getMonth()] +
                      " " +
                      new Date(leave?.date).getDate() +
                      ", " +
                      new Date(leave?.date).getFullYear()}
                  </td>
                  <td>{leave.type}</td>
                  <td>{leave.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Leave;

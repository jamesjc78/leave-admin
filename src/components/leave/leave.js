import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import _ from "lodash";
import { getLeave } from "../../endpoints/leave";
import { getUser } from "../../endpoints/user";
import DeleteModal from "./delete";
import UpdateModal from "./update";

const Leave = () => {
  const { email } = useParams();
  const [employee, setEmployee] = useState([]);
  const [modalShowDelete, setModalShowDelete] = useState(false);
  const [modalShowUpdate, setModalShowUpdate] = useState(false);
  const [leaves, setLeaves] = useState([]);
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
  const navigate = useNavigate();
  useEffect(() => {
    // checking access token
    if (localStorage.getItem("accessToken") == null) {
      navigate("/");
    }
    getUser(email).then((body) => {
      if (body.authmessage) {
        if (body.authmessage === "access token expired!")
          localStorage.removeItem("accessToken");
        navigate("/");
      }
      if (body.status === "success") {
        setEmployee(body.user);
      }
    });
    getLeave(email).then((body) => {
      if (body.status === "success") {
        body.employeeLeaves = _.orderBy(body.employeeLeaves, "date", "desc");
        setLeaves(body.employeeLeaves);
      }
    });
  }, [modalShowUpdate]);

  let counter = 1;
  return (
    <div className="container-fluid">
      <UpdateModal
        modalShowUpdate={modalShowUpdate}
        setModalShowUpdate={setModalShowUpdate}
        employee={employee}
        setEmployee={setEmployee}
      />
      <DeleteModal
        modalShowDelete={modalShowDelete}
        setModalShowDelete={setModalShowDelete}
        employee={employee}
      />
      <div className="row">
        <div className="col">
          <p className="font-weight-bold margin-head">
            {employee.firstName + " " + employee.lastName} ({employee.position})
          </p>
          <p>
            Total Leaves ({new Date().getFullYear()}) : {leaves.length}
          </p>
        </div>
        <div className="col ">
          <>
            <button
              className="btn float-end btn-primary add-employee"
              onClick={() => setModalShowUpdate(true)}
            >
              Update User
            </button>
          </>
          <>
            <button
              className="btn btn-danger float-end delete-employee"
              onClick={() => setModalShowDelete(true)}
            >
              Delete User
            </button>
          </>
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
              {leaves.map((leave) => (
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

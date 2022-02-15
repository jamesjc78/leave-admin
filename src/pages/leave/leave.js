import React, { useState } from "react";
import NavBar from "../../components/navbar";
import Leave from "../../components/leave";

const Leaves = () => {
  const [modalShowDelete, setModalShowDelete] = useState(false);
  const [employees, setemployees] = useState([
    // list of employees
    {
      name: "J.C. James Arcilla",
      email: "jla@noaya.no",
      position: "Software Developer",
      password: null,
    },
    {
      name: "Vince Elizaga",
      email: "vne@noaya.no",
      position: "Software & System Engineer",
      password: null,
    },
    {
      name: "Kenji Mille Grava",
      email: "kmg@noaya.no",
      position: "Software Developer",
      password: null,
    },
  ]);
  const [leaves, setLeaves] = useState([
    // list of leaves
    {
      email: "kmg@noaya.no",
      date: Date(2022, 0, 14),
      type: "Sick",
      notes: "Headache and Fever",
    },
    {
      email: "kmg@noaya.no",
      date: Date(2022, 5, 10),
      type: "Vacation",
      notes: "N/A",
    },
    {
      email: "kmg@noaya.no",
      date: Date(2022, 0, 12),
      type: "Emergency",
      notes: "Family Emergency",
    },
    {
      email: "jla@noaya.no",
      date: Date(2022, 0, 12),
      type: "Sick",
      notes: "Headache and Fever",
    },
  ]);
  const [authorized, setAuthorized] = useState(true);

  //Leave Handlers

  const showModalDelete = (value) => {
    setModalShowDelete(value);
  };

  return (
    <>
      <NavBar />
      <Leave
        authorized={authorized}
        employees={employees}
        leaves={leaves}
        modalShowDelete={modalShowDelete}
        showModal={showModalDelete}
      />
    </>
  );
};
export default Leaves;

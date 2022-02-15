import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import LoginForm from "./components/login/login";
import Home from "./components/home/home";
import Leave from "./components/leave/leave";
import NavBar from "./components/navbar/navbar";

function App() {
  const navigate = useNavigate();

  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [position, setPosition] = useState(null);
  const [password, setPassword] = useState(null);
  const [modalShowAdd, setModalShowAdd] = useState(false);
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
  const [loginError, setLoginError] = useState({
    userError: "", // login error messages
    passwordError: "",
  });
  const [authorized, setAuthorized] = useState(true);

  //Leave Handlers

  const showModalDelete = (value) => {
    setModalShowDelete(value);
  };

  // render
  return (
    <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route
        path="/user"
        element={
          <div>
            <NavBar />
            <Home />
          </div>
        }
      />
      <Route
        path="/user/:email"
        element={
          <div>
            <NavBar />
            <Leave
              authorized={authorized}
              employees={employees}
              leaves={leaves}
              modalShowDelete={modalShowDelete}
              showModal={showModalDelete}
            />
          </div>
        }
      />
    </Routes>
  );
}

export default App;

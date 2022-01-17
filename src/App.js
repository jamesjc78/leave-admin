import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import LoginForm from "./components/login/login";
import Home from "./components/home/home";
import Leave from "./components/leave/leave";

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const loginValid = (loginError, username, password) => {
  let valid = true;

  // validate form errors being empty
  Object.values(loginError).forEach((val) => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  username === null && (valid = false);
  password === null && (valid = false);

  return valid;
};

function App() {
  const navigate = useNavigate();

  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [position, setPosition] = useState(null);
  const [password, setPassword] = useState(null);
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
  const [authorized, setAuthorized] = useState(false);

  // Login Handlers
  const handleLogin = (event) => {
    console.log(loginError + email + password);
    event.preventDefault();
    if (loginValid(loginError, email, password)) {
      setAuthorized(true);
      navigate("/user");
    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
  };

  const handleLoginChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let newLoginError = { ...loginError };

    switch (name) {
      case "email":
        setEmail(value);
        newLoginError.userError = emailRegex.test(value)
          ? ""
          : "invalid email address";
        break;
      case "password":
        setPassword(value);
        newLoginError.passwordError =
          value.length < 6 ? "minimum 6 characters required" : "";
        break;
      default:
        break;
    }
    console.log(loginError);
    setLoginError(newLoginError);
  };

  // Home Handlers
  const handleUserRowClick = (email) => {
    navigate(`/user/${email}`);
  };
  return (
    <Routes>
      <Route
        path="/"
        element={
          <LoginForm
            onLogin={handleLogin}
            onLoginChange={handleLoginChange}
            loginError={loginError}
          />
        }
      />
      <Route
        path="/user"
        element={
          <Home
            authorized={authorized}
            employees={employees}
            onRowClick={handleUserRowClick}
          />
        }
      />
      <Route
        path="/user/:email"
        element={<Leave employees={employees} leaves={leaves} />}
      />
    </Routes>
  );
}

export default App;

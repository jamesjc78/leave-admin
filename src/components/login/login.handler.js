import { login } from "../../endpoints/account";
import { loginValid } from "./login.functions";
import { emailRegex } from "../../common";

// submit handler
export const HandleLogin = (event, email, password, loginError, navigate) => {
  event.preventDefault();
  if (loginValid(loginError, email, password)) {
    // getting user from database
    login(email, password).then((body) => {
      console.log("data: " + body);
      if (body && body.message) {
        // displaying error message
        alert(body.message);
      } else {
        // saving token to local storage
        localStorage.setItem("accessToken", body.accessToken);
        navigate("/user");
      }
    });
  } else {
    alert("authentication failed. Invalid username or password!");
  }
};

// input change handler
export const HandleLoginChange = (
  event,
  loginError,
  setEmail,
  setPassword,
  setLoginError
) => {
  event.preventDefault();
  const { name, value } = event.target;
  let newLoginError = { ...loginError };

  switch (name) {
    case "email": // validating username
      setEmail(value);
      newLoginError.userError = emailRegex.test(value)
        ? ""
        : "invalid email address";
      break;
    case "password": // validating password
      setPassword(value);
      newLoginError.passwordError =
        value.length < 6 ? "minimum 6 characters required" : "";
      break;
    default:
      break;
  }
  // setting input error
  setLoginError(newLoginError);
};

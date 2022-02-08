import { emailRegex, nameRegex } from "../../common/common";
import { addUser } from "../../endpoints/user";

// Clicking employee row
export const HandleUserRowClick = (username, navigate) => {
  navigate(`/user/${username}`);
};

// Clicking Add button
export const HandleAddUser = (
  event,
  addError,
  username,
  firstName,
  lastName,
  position,
  password,
  setModalShowAdd
) => {
  event.preventDefault();
  let valid = true;
  Object.values(addError).forEach((val) => {
    val.length > 0 && (valid = false);
  });
  if (valid) {
    addUser(firstName, lastName, username, password, position).then((body) => {
      alert(body.message);
      if (body.status == "success") setModalShowAdd(false);
    });
  }
};

// Changing user credentials
export const HandleAddUserChange = (
  event,
  addError,
  setUsername,
  setFirstName,
  setLastName,
  setPosition,
  setPassword,
  setAddError
) => {
  event.preventDefault();
  const { name, value } = event.target;
  let newAddError = { ...addError };
  switch (name) {
    case "email": // validating username
      setUsername(value);
      newAddError.userError = emailRegex.test(value)
        ? ""
        : "invalid email address";
      break;
    case "firstname": // validating first name
      setFirstName(value);
      newAddError.firstNameError =
        nameRegex.test(value) && value.length > 0 ? "" : "invalid name";
      break;
    case "lastname": // validating last name
      setLastName(value);
      newAddError.lastNameError =
        nameRegex.test(value) && value.length > 0 ? "" : "invalid name";
      break;
    case "position": // validating position
      setPosition(value);
      newAddError.positionError = value.length == 0 ? "invalid position" : "";
      break;
    case "password": // validating password
      setPassword(value);
      newAddError.passwordError =
        value.length < 6 ? "minimum 6 characters required" : "";
      break;
    default:
      break;
  }
  // setting input error
  setAddError(newAddError);
};

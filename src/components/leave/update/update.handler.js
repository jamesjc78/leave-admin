import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { nameRegex } from "../../../common";
import { updateUser } from "../../../endpoints/user";

export const HandleUpdateUser = (
  event,
  username,
  firstName,
  lastName,
  position,
  password,
  setEmployee
) => {
  event.preventDefault();
  toast.configure();
  console.log(`${username} ${firstName} ${lastName} ${position} ${password}`);
  if (firstName && lastName && position) {
    updateUser(firstName, lastName, username, password, position).then(
      (body) => {
        if (body.status == "failed") {
          toast.error(body.message);
        } else {
          toast.success("Successfully updated!");
          setEmployee(body.user);
        }
      }
    );
  }
};

// Changing user credentials
export const HandleUpdateUserChange = (
  event,
  updateError,
  setFirstName,
  setLastName,
  setPosition,
  setPassword,
  setUpdateError
) => {
  event.preventDefault();
  const { name, value } = event.target;
  let newUpdateError = { ...updateError };
  switch (name) {
    case "firstname": // validating first name
      setFirstName(value);
      newUpdateError.firstNameError =
        nameRegex.test(value) && value.length > 0 ? "" : "invalid name";
      break;
    case "lastname": // validating last name
      setLastName(value);
      newUpdateError.lastNameError =
        nameRegex.test(value) && value.length > 0 ? "" : "invalid name";
      break;
    case "position": // validating position
      setPosition(value);
      newUpdateError.positionError =
        value.length == 0 ? "invalid position" : "";
      break;
    case "password": // validating password
      setPassword(value);
      newUpdateError.passwordError =
        value.length < 6 ? "minimum 6 characters required" : "";
      break;
    default:
      break;
  }
  // setting input error
  setUpdateError(newUpdateError);
};

import { deleteUser } from "../../../endpoints/user";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const DeleteHandler = (username, navigate) => {
  console.log(`username ${username}`);
  deleteUser(username).then((body) => {
    console.log(body);
    if (body.status === "success") {
      navigate("/user");
    } else {
      toast.error(body.message);
    }
  });
};

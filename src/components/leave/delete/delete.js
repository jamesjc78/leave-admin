import { Button, Modal } from "react-bootstrap";
import { DeleteHandler } from "./delete.handler";
import { useNavigate } from "react-router-dom";

const DeleteUser = ({ modalShowDelete, setModalShowDelete, employee }) => {
  const navigate = useNavigate();
  return (
    <>
      <Modal
        show={modalShowDelete}
        aria-labelledby="contained-modal-title-vcenter"
        backdrop="static"
        centered
        onHide={() => setModalShowDelete(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Delete User
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Are you sure you want to delete{" "}
            <i>{employee.firstName + " " + employee.lastName} </i>?
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="btn btn-danger"
            onClick={() => DeleteHandler(employee.username, navigate)}
          >
            Delete User
          </Button>
          <Button
            className="btn btn-secondary"
            onClick={() => setModalShowDelete(false)}
          >
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DeleteUser;

import React from "react";

function DeleteUser(props) {
  return (
    <div
      className="modal fade"
      id="modalDelete"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="modalDelete"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Delete User</h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">
                Are you sure you want to delete username ?
              </span>
            </button>
          </div>
          <div className="modal-body">...</div>
          <div className="modal-footer">
            <button type="button" className="btn btn-danger">
              Delete User
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeleteUser;

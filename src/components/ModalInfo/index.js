import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ModalInfo = ({ show, handleClose, userInfo }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>User Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="container">
          <div className="row">
            <table className="table table-bordered success">
              <thead>
                {userInfo?.name && (
                  <tr>
                    <th>Full Name</th>
                    <td>{userInfo?.name}</td>
                  </tr>
                )}
                {userInfo?.username && (
                  <tr>
                    <th>User Name</th>
                    <td>{userInfo?.username}</td>
                  </tr>
                )}
                {userInfo?.email && (
                  <tr>
                    <th className="info">Email</th>
                    <td>{userInfo?.email}</td>
                  </tr>
                )}
                {userInfo?.phone && (
                  <tr>
                    <th className="info">Contact</th>
                    <td>{userInfo?.phone}</td>
                  </tr>
                )}
                {userInfo.address?.street && (
                  <tr>
                    <th className="info">Street</th>
                    <td>{userInfo.address?.street}</td>
                  </tr>
                )}
                {userInfo.address?.city && (
                  <tr>
                    <th className="info">City</th>
                    <td>{userInfo.address?.city}</td>
                  </tr>
                )}
                {userInfo.address?.zipcode && (
                  <tr>
                    <th className="info">Zipcode</th>
                    <td>{userInfo.address?.zipcode}</td>
                  </tr>
                )}
                {userInfo.address?.company && (
                  <tr>
                    <th className="info">Company Info</th>
                    <td>
                      {userInfo.company?.name +
                        userInfo.company?.catchPhrase +
                        userInfo.company?.bs}
                    </td>
                  </tr>
                )}
              </thead>
            </table>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalInfo;

import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ModalInfo = ({show ,handleClose,userInfo}) => {

	
  return (
    <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>User Details</Modal.Title>
      {console.log("hello--", userInfo)}
    </Modal.Header>
    <Modal.Body>

    <div className="container">
	<div className="row">
		<table className="table table-bordered success">
				<thead>
					<tr >
						<th >Full Name</th>
						<td>{userInfo?.name}</td>
					</tr>
          <tr >
						<th >User Name</th>
						<td>{userInfo?.username}</td>
					</tr>
					<tr>
						<th className="info">Email</th>
						<td>{userInfo?.email}</td>
					</tr>
					<tr>
						<th className="info">Contact</th>
						<td>{userInfo?.phone}</td>
					</tr>
					
					<tr>
						<th className="info">Street</th>
						<td>{userInfo.address?.street}</td>
					</tr>
					<tr>
						<th className="info">City</th>
						<td>{userInfo.address?.city}</td>
					</tr>
					<tr>
						<th className="info">Zipcode</th>
						<td>{userInfo.address?.zipcode}</td>
					</tr>
					<tr >
						<th  className="info">Company Info</th>
						<td>{userInfo.company?.name + userInfo.company?.catchPhrase + userInfo.company?.bs}</td>
					</tr>
				</thead>

			</table>
      </div>
      </div>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
      {/* <Button variant="primary" onClick={handleClose}>
        Save Changes
      </Button> */}
    </Modal.Footer>
  </Modal>
  )
}

// ModalInfo.propTypes = {}
// ModalInfo.defaultProps = {
//     show: false,
//     handleClose: false,
//     userinfo: {}
// }

export default ModalInfo
import React from 'react'
          
            import { MDBModal,MDBModalBody, MDBModalHeader,MDBModalFooter,  MDBBtn } from 'mdb-react-ui-kit';

const Profile = ({ isOpen, onClose }) => {

  return (
    <div>

<MDBModal isOpen={isOpen} toggle={onClose}>
            <MDBModalHeader toggle={onClose}>Profile View</MDBModalHeader>
            <MDBModalBody>
                <h2>Your Name</h2>
                <p>Email: youremail@example.com</p>
                <p>Location: Your City, Country</p>
                {/* Add more profile details as needed */}
            </MDBModalBody>
            <MDBModalFooter>
                <MDBBtn color="black" onClick={onClose}>Close</MDBBtn>
            </MDBModalFooter>
        </MDBModal>
    </div>
  )
}

export default Profile
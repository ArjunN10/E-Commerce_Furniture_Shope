import React from 'react'
import { useState } from 'react';
import { Button, Navbar, Nav, NavDropdown, MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit'; // Import the necessary MDB components


function AdminHome() {
    
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const ab = (path) => {
    // Your navigation logic here
  };
  return (

   <div>
    <MDBContainer fluid>
      <MDBRow className={`flex-nowrap ${showSidebar ? 'sidebar-open' : ''}`}>
        <MDBCol md="3" lg="2" className="px-sm-2 px-0 sidebar">
          {/* Sidebar Content */}
          <Navbar expand="md" className="flex-column align-items-start px-3 pt-2 min-vh-100 text-white bg-dark">
            {/* Sidebar Header */}
            <Navbar.Brand href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
              <span className="fs-5 d-none d-md-inline">Menu</span>
            </Navbar.Brand>
            {/* Sidebar Navigation */}
            <Nav className="nav-pills flex-column mb-md-auto mb-0 align-items-center align-items-md-start" id="menu">
              <Button onClick={toggleSidebar} className="text-black">
                {showSidebar ? 'Hide Sidebar' : 'Show Sidebar'}
              </Button>
              <NavDropdown title="Products" className="nav-link px-0 align-middle text-white">
                <div style={{ padding: '10px 20px', backgroundColor: '#f8f9fa' }}>
                  <NavDropdown.Item onClick={() => ab('/AdminToys')} className="text-dark text-decoration-none">Toys</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => ab('/AdminClothes')} className="text-dark text-decoration-none">Clothes</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => ab('/AdminFood')} className="text-dark text-decoration-none">Food</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => ab('/AdminOthers')} className="text-dark text-decoration-none">Others</NavDropdown.Item>
                </div>
              </NavDropdown>
              <Button variant="link" onClick={() => ab('/adminProduct')} className="text-white text-decoration-none">
                All Product
              </Button>
              <br></br>
              <Button variant="link" onClick={() => ab('/AdminUser')} className="text-white text-decoration-none">
                Users
              </Button>
              {/* <Button variant="link" onClick={() => { setuser(false); ab('/'); }} className="text-white text-decoration-none"> */}
                {/* Logout
              </Button> */}
            </Nav>
            <hr />
          </Navbar>
        </MDBCol>
        <MDBCol>
          {/* Main Content */}
          {/* Your main content goes here */}
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  
  
    
    </div>

  )
}

export default AdminHome
import { Button, Nav, NavDropdown, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './AdminSidebar.css' 


function AdminSidebar() {
  const navigate = useNavigate();

  const navigateTo = (path) => {
    navigate(path);
  };
 

  return (
    <Container fluid>
      <Row>
        <Col md="12" lg="12" 
        className="h-100 p-0" 
        // style={{ height: '100vh', position: 'sticky', top: 0 }}
        >
              
                <Nav className="flex-column align-items-center px-3 pt-2 min-vh-100  text-white bg-dark" >
                  <Nav.Item className=" pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <span className="fs-5 d-none d-md-inline ms-1"><h3>Hello...</h3>
                   Admin</span>
                  </Nav.Item>
                  <Nav className="nav-pills flex-column mb-md-auto mb-0 align-items-center align-items-md-start" id="menu">
                    <Button
                     onClick={() => navigateTo('/adminhome')} 
                     className="text-black btn-success mb-4">
                      Home
                    </Button>
    
                    <Button
                     onClick={() => navigateTo('adminAllproduct')}
                      className="text-black mb-4">
                      All Products
                    </Button>
                    <NavDropdown title='Products Category' id="products-dropdown" className="w-100 text-white mb-4">
                      <div style={{ padding: '10px 20px', backgroundColor: '#f8f9fa' }} >
                        <NavDropdown.Item onClick={() => navigateTo('AdminPageTables')} className="text-dark text-decoration-none">Tables</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => navigateTo('AdminPageChairs')} className="text-dark text-decoration-none">Chairs</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => navigateTo('AdminPageBeds')} className="text-dark text-decoration-none">Beds</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => navigateTo('AdminPageSofas')} className="text-dark text-decoration-none">Sofas</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => navigateTo('AdminPageWardrobes')} className="text-dark text-decoration-none">Wardrobes</NavDropdown.Item>
                      </div>
                    </NavDropdown>
                    <Button 
                    onClick={() => navigateTo('adminUserlist')} 
                    className="text-black text-decoration-none mb-4">
                     User List
                    </Button>
                    <br />
                    <Button
                     onClick={() => navigateTo('/login')} 
                     className="text-black text-decoration-none mb-4 btn-danger">
                   Logout
                    </Button>
                  </Nav>
                  <hr />
                </Nav>
              </Col>
            </Row>
          </Container>
      
  );
}

export default AdminSidebar;

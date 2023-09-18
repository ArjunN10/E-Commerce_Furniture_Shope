import React, { useContext, useState } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
} from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
import { Mycontext } from "../context/Context";
import Search from "./products/Search";

function Nav() {
  const { username, setusername,loggedIn, setLoggedIn } = useContext(Mycontext);
  const [showBasic, setShowBasic] = useState(false);
  const navigate = useNavigate();
  
  const navcart = () => {
    if (loggedIn===false) {
      navigate("/addcart");
    } else {
      alert("Login to your account");
    }
  };

  const handleLogout = () => {
    setusername(""); 
    setLoggedIn(!loggedIn); // Set the login state to false
  };

  return (
    <>
    <MDBNavbar expand="lg" light bgColor="light" className="my-4">
      <MDBContainer fluid>
        <MDBNavbarBrand className="mb-lg-0 me-4">
              <img
                   src={require("../components/products/images/logoicon.jpg")}  
                  alt="Shop Logo"
                  className="img-fluid"
                  style={{ maxWidth: "70px" }}
                />
             <h5 style={{ fontFamily: "cursive" }}>
                  WILD  &nbsp;WOOD <br />
                    GALLERY
                </h5>

        </MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className="mr-auto mb-lg-1">
            <MDBNavbarItem>
              <MDBNavbarLink
                active
                aria-current="page"
                style={{ fontFamily: "cursive" }}
                onClick={() => navigate("/")}
                href="#home"
              >
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink onClick={() => navigate("/allproducts")}>
                Products
              </MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
  <MDBDropdown>
    <MDBDropdownToggle
      tag='a'
      className="nav-link"
      style={{ fontFamily: "cursive" }}
      role="button"
    >
      Categories
    </MDBDropdownToggle>
    <MDBDropdownMenu className="text-center">
      <MDBDropdownItem onClick={() => navigate("/table")}>
      <img
          src="https://img.icons8.com/?size=2x&id=30190&format=png"
          alt="icon"
          className="img-fluid " 
          style={{ maxWidth: '20px', height: 'auto' }}
        />
       
        Tables
      </MDBDropdownItem>
      <MDBDropdownItem onClick={() => navigate("/bed")}>
      <img
          src="https://img.icons8.com/?size=2x&id=zVuzYLxp4Euc&format=png"
          alt="icon"
          className="img-fluid " 
          style={{ maxWidth: '20px', height: 'auto' }}
        />
        Beds
      </MDBDropdownItem>
      <MDBDropdownItem onClick={() => navigate("/sofa")}>
      <img
          src="https://img.icons8.com/?size=2x&id=80481&format=png"
          alt="icon"
          className="img-fluid " 
          style={{ maxWidth: '20px', height: 'auto' }}
        />
        Sofas
      </MDBDropdownItem>
      <MDBDropdownItem onClick={() => navigate("/chair")}>
      <img
          src="https://img.icons8.com/?size=2x&id=kLCDEKFEmsPz&format=png"
          alt="icon"
          className="img-fluid " 
          style={{ maxWidth: '20px', height: 'auto' }}
        />
        Chairs
      </MDBDropdownItem>
      <MDBDropdownItem onClick={() => navigate("/wardrobe")}>
      <img
          src="https://img.icons8.com/?size=2x&id=81148&format=png"
          alt="icon"
          className="img-fluid " 
          style={{ maxWidth: '20px', height: 'auto' }}
        />
        Wardrobes
      </MDBDropdownItem>
    </MDBDropdownMenu>
  </MDBDropdown>
</MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>

      <MDBContainer fluid className="justify-content-center me-5">
        <div>
          <Search />
        </div>
        {loggedIn!=true ?
         (
          <div className="d-flex">
          <MDBBtn
            outline
            rippleColor="secondary"
            color="secondary"
            onClick={handleLogout}
            className="me-2"
            type="button"
          >
            Logout
          </MDBBtn>
          
           <MDBNavbarBrand className="me-2" href="#">
           <MDBBtn className="btn btn-white" onClick={() => navcart()}>
             <img
               src="https://img.icons8.com/?size=2x&id=TdZUZUq3XNh6&format=gif"
               alt="cart"
               className="img-fluid"
             />
             <MDBNavbarLink>Cart</MDBNavbarLink>
           </MDBBtn>
         </MDBNavbarBrand>
         </div>
          )
           : (
          <MDBBtn
            outline
            rippleColor="success"
            color="success"
            onClick={() => navigate("/login")}
            className="me-2"
            type="button"
          >
            Login
          </MDBBtn>
          )}
        <MDBBtn className="btn btn-white ">
          <img
            src="https://img.icons8.com/?size=2x&id=85750&format=png"
            alt="profile"
            className="img-fluid"
          />
          {username}
        </MDBBtn>
      </MDBContainer>
    </MDBNavbar>
    </>
  );
}

export default Nav;

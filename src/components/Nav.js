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

function Nav() {
  const { username } = useContext(Mycontext);
  console.log(username);
  const [showBasic, setShowBasic] = useState(false);
  const navigate = useNavigate();
  const navcart = () => {
    if (username) {
      navigate("/addcart");
    } else {
      alert("login in to account");
    }
  };

  return (
    <MDBNavbar expand="lg" light bgColor="light" className="my-4 ">
      <MDBContainer fluid>
        <MDBNavbarBrand className="mb-lg-1 me-4">
          <h3 style={{ fontFamily: "revert-layer" }}>
            W<sub>OOD</sub> G<sub>ALLARY</sub>
          </h3>
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
          <MDBNavbarNav className="mr-auto  mb-lg-1 ">
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
                  tag="a"
                  className="nav-link"
                  style={{ fontFamily: "cursive" }}
                  role="button"
                >
                  Categories
                </MDBDropdownToggle>
                <MDBDropdownMenu className="text-center">
                  <MDBDropdownItem onClick={() => navigate("/table")}>
                    Tables
                  </MDBDropdownItem>
                  <MDBDropdownItem onClick={() => navigate("/bed")}>
                    Beds
                  </MDBDropdownItem>
                  <MDBDropdownItem onClick={() => navigate("/sofa")}>
                    Sofas
                  </MDBDropdownItem>
                  <MDBDropdownItem onClick={() => navigate("/chair")}>
                    {" "}
                    Chairs
                  </MDBDropdownItem>
                  <MDBDropdownItem onClick={() => navigate("/wardrobe")}>
                    Wardrobes
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>

      <MDBContainer fluid className="justify-content-center me-5">
        <form className="navbar-search d-flex input-group w-50 me-4 ">
          <input
            type="search"
            className="form-control"
            placeholder="Search Here"
            aria-label="Search"
          />
          <MDBBtn color="primary">Search</MDBBtn>
        </form>
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
        {/* <MDBBtn outline  rippleColor='secondary'color='secondary' onClick={()=>navigate("/signup")} className="me-2" type='button'>
          Signup
        </MDBBtn> */}
        <MDBBtn
          outline
          rippleColor="secondary"
          color="secondary"
          onClick={() => navigate("/")}
          className="me-2"
          type="button"
        >
          Logout
        </MDBBtn>
        <MDBNavbarBrand>
          <img
            src="https://img.icons8.com/?size=2x&id=85750&format=png"
            alt="profile"
            className="img-fluid  "
          />
          {username}
        </MDBNavbarBrand>
      </MDBContainer>
    </MDBNavbar>
  );
}
export default Nav;

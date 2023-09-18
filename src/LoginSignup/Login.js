import React, { useContext } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBRow,
  MDBInput,
  MDBIcon,
} from "mdb-react-ui-kit";
import { Link, useNavigate } from "react-router-dom";
import { Mycontext } from "../context/Context";

function Login() {
  const navigate = useNavigate();
  const { user, setusername, username ,setLoggedIn} = useContext(Mycontext);
  const login = (e) => {
    e.preventDefault();
    const eml = e.target.email.value;
    const password = e.target.pwd.value;
    console.log(eml);
    console.log(password);
    const filteruser = user.filter((item) => item.email === eml);
    if (filteruser.length !== 0) {
      if (filteruser[0].password === password) {
        setLoggedIn(prevvalue=>prevvalue=!prevvalue)
        navigate("/");
        setusername(filteruser[0].name);
      } else {
        alert("Invalid Details");
      }
    } else {
      alert("user not avilable");
    }
  };
  // console.log(username);
  return (
    <div className="w-75 mx-auto ">
      <MDBContainer fluid>
        <MDBCard
          className="mx-5 mb-5 p-5 shadow-5 "
          style={{
            marginTop: "50px",
            backdropFilter: "blur(30px)",
          }}
        >
          <MDBCardBody className="ms-auto me-auto text-center ">
          <MDBRow>
            <MDBCol
              md="10"
              lg="6"
              className="order-2 order-lg-1 d-flex flex-column align-items-center"
            >
          <h3 className="text-center mb-5">LOGIN</h3>
            <form onSubmit={login} className="w-auto">
              <MDBInput
                wrapperClass="mb-4"
                label="Email address"
                id="email"
                type="email"

                required
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Password"
                id="pwd"
                type="password"
                required
              />

              <div className="d-flex justify-content-between mx-4 mb-4">
                <a href="!#">Forgot password?</a>
              </div>
              <MDBBtn className="mb-4 w-100">Sign in</MDBBtn>
              <p>
                or <Link to={"/signup"}>sign up?</Link>
              </p>
              <p>                
                 <Link to={"/"}>Home</Link>
              </p>
             </form>
             </MDBCol>
             </MDBRow>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    </div>
  );
}

export default Login;

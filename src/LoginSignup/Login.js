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
  const { user, setusername, setLoggedIn } = useContext(Mycontext);
  const login = (e) => {
    e.preventDefault();
    const eml = e.target.email.value;
    const password = e.target.pwd.value;
    // console.log(eml);
    // console.log(password);
    const filteruser = user.filter((item) => item.email === eml);
    // console.log(username);
    if (filteruser.length !== 0) {
      if (filteruser[0].password === password) {
        setLoggedIn((prevvalue) => (prevvalue = !prevvalue));
        navigate("/");
        setusername(filteruser[0].name);
      } else {
        alert("Invalid Details");
      }
    } else if (eml == "admin@gmail.com" && password == "admin") {
      navigate("/adminhome");
    } else {
      alert("user not avilable");
    }
  };

  return (
    <div>
      <MDBContainer
        fluid
        className="p-4 background-radial-gradient overflow-hidden"
      >
        <MDBRow>
          <MDBCol md="6" className="position-relative">
            <div
              id="radius-shape-1"
              className="position-absolute rounded-circle shadow-5-strong"
            ></div>
            <div
              id="radius-shape-2"
              className="position-absolute shadow-5-strong"
            ></div>

            <MDBCard
              className="my-5 bg-glass"
              style={{
                boxshadow:
                  "rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;",
              }}
            >
              <MDBCardBody className="p-5">
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
                  <MDBBtn className="w-100 mb-4" size="md">
                    sign up
                  </MDBBtn>

                  <div className="text-center">
                    <p>
                      {" "}
                      Not a member? <Link to={"/signup"}>sign up</Link>
                    </p>
                    <p className="mb-5">
                      <Link to={"/"}>
                        <MDBBtn className="btn-success">Home</MDBBtn>
                      </Link>
                    </p>

                    <MDBBtn
                      tag="a"
                      color="none"
                      className="mx-3"
                      style={{ color: "#1266f1" }}
                    >
                      <MDBIcon fab icon="facebook-f" size="sm" />
                    </MDBBtn>

                    <MDBBtn
                      tag="a"
                      color="none"
                      className="mx-3"
                      style={{ color: "#1266f1" }}
                    >
                      <MDBIcon fab icon="twitter" size="sm" />
                    </MDBBtn>

                    <MDBBtn
                      tag="a"
                      color="none"
                      className="mx-3"
                      style={{ color: "#1266f1" }}
                    >
                      <MDBIcon fab icon="google" size="sm" />
                    </MDBBtn>

                    <MDBBtn
                      tag="a"
                      color="none"
                      className="mx-3"
                      style={{ color: "#1266f1" }}
                    >
                      <MDBIcon fab icon="github" size="sm" />
                    </MDBBtn>
                  </div>
                </form>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol
            md="6"
            className="text-center text-md-start d-flex flex-column justify-content-center"
          >
            <h1
              className="my-5 display-3 fw-bold ls-tight px-3"
              style={{ color: "hsl(218, 81%, 95%)" }}
            >
              The best offers <br />
              <span style={{ color: "hsl(218, 81%, 75%)" }}>
                for your Happiness
              </span>
            </h1>

            <p className="px-3" style={{ color: "hsl(218, 81%, 85%)" }}>
              Welcome to our WILD WOOD GALLERY family, where style meets
              convenience, and your dream home is just a click away! Our login
              page is not just a gateway to your furniture shopping adventure;
              it's a visual treat that sets the tone for the incredible
              experience that awaits you.
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}

export default Login;

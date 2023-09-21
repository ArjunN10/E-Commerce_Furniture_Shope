import React, { useContext } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
} from "mdb-react-ui-kit";
import { Mycontext } from "../context/Context";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Signup() {
  const { user, setuser } = useContext(Mycontext);
  const navigate = useNavigate();

  const register = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.pwd.value;
    const repassword = event.target.repwd.value;
    const emailvalid = user.filter((item) => item.email === email);
    if (emailvalid.length !== 0) {
      alert("Email already exist");
    } else {
      setuser([...user,{
          name: name,
          email: email,
          password: password,
          re_password: repassword,
        },
      ]);
    }
    // console.log(name);
    event.target.reset();
  };
  // console.log(user);

  return (
    <MDBContainer fluid>
      <MDBCard className="text-black m-5" style={{ borderRadius: "25px" }}>
        <MDBCardBody>
          <MDBRow>
            <MDBCol
              md="10"
              lg="6"
              className="order-2 order-lg-1 d-flex flex-column align-items-center"
            >
              <form onSubmit={register}>
                <p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                  Sign up
                </p>

                <div className="d-flex flex-row align-items-center mb-4 ">
                  <MDBIcon fas icon="user me-3" size="lg" />
                  <MDBInput
                    label="Your Name"
                    id="name"
                    type="text"
                    className="w-100"
                    required
                  />
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="envelope me-3" size="lg" />
                  <MDBInput
                    label="Your Email"
                    id="email"
                    type="email"
                    required
                  />
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="lock me-3" size="lg" />
                  <MDBInput 
                  label="Password" 
                  id="pwd" 
                  type="password" 
                  required
                  />
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="key me-3" size="lg" />
                  <MDBInput
                    label="Repeat your password"
                    id="repwd"
                    type="password"
                    required
                  />
                </div>
                <MDBBtn
                 className="mb-4 ms-4" 
                 size="lg" 
                 onSubmit={()=>navigate('/login')}
                 >
                  Register
                </MDBBtn>
                <p className="ms-4">
                  or  <Link to={"/login"}><MDBBtn className="btn-primary">Login</MDBBtn></Link>
                </p>
              </form>
            </MDBCol>
            <MDBCol
              md="10"
              lg="6"
              className="order-1 order-lg-2 d-flex align-items-center"
            >
              <MDBCardImage
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                fluid
              />
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}
export default Signup;

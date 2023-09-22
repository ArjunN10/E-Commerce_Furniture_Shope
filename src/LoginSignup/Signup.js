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
import Footer from "../components/Footer";

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
<MDBCard className="text-black m-5" style={{ borderRadius: "25px", boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px" }}>

        <MDBCardBody>
          <MDBRow>
            <MDBCol
              md="10"
              lg="6"
              className="order-2 order-lg-1 d-flex flex-column align-items-center"
            >
              <form className='mt-5'onSubmit={register}>
                <h3 classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4  ">
                  Sign up
                </h3>

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
                 src={require("../components//products/images/cover15new.jpg")} 
                 style={{ borderRadius: "20px" }}
                fluid
              />
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
      <div className='mt-3'>
    <Footer/>
     </div>
    </MDBContainer>
  );
}
export default Signup;

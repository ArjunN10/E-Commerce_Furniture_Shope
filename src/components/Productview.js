import React, { useContext,useEffect } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBCard,
  MDBInput,
} from "mdb-react-ui-kit";
// import { productsList } from './Productslist';
import { useNavigate, useParams } from "react-router-dom";
import { Mycontext } from "../context/Context";
import Nav from "./Nav";


function Productview() {
  const navigate = useNavigate();
  const { productsList, addcart, setaddcart, username } = useContext(Mycontext);
  const { id } = useParams();

  // checking if already added to cart
  const productID = addcart.map((price) => price.id);
  // console.log(productID);
  const productfilter = productsList.filter((p) => p.id === parseInt(id));
  const idproduct = (e) => {
    // const id = e.target.id;

    // userlogin condition
    // console.log(username);
    if (username) {
      if (addcart.includes(productfilter[0])) {
        alert("Your product already in your cart");
      } else {
        // console.log(id);
        setaddcart([...addcart, ...productfilter]);
        navigate("/addcart");
      }
    } else {
      alert("must login");
      navigate("/");
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);



  return (
    <>
      <div className=" sticky-top">
        <Nav />
      </div>
      {productfilter.map((Pro) => (
        <div key={Pro.id}>
          <main className="mt-5 pt-4">
            <MDBContainer className="mt-5">
              <MDBRow>
                <MDBCol md="6" mb="4">
                  <MDBCard>
                    <img
                      src={Pro.src}
                      className="img-fluid hover-shadow card-img-top "
                      alt="Product"
                    />
                  </MDBCard>
                </MDBCol>

                <MDBCol md="6" mb="4">
                  <MDBCard className="md-6 mt-5">
                    <div className="p-4">
                      <p className="lead">
                        <span className="me-1">
                          <h1>{Pro.name}</h1>
                          <del>{Pro.price2}</del>
                        </span>
                        <h3>
                          <span className="blockquote-footer">
                            Offer Price :{" "}
                          </span>
                          {Pro.price}
                        </h3>
                      </p>

                      <strong>
                        <p style={{ fontSize: "20px" }}>Description</p>
                      </strong>

                      <p>{Pro.Discription}</p>

                      <form className="justify-content-left d-flex p-2">
                        <div
                          className="form-outline me-1"
                          style={{ width: "100px" }}
                        >
                          <MDBInput
                            type="number"
                            defaultValue="1"
                            label="Quantity"
                          />
                        </div>
                        <MDBBtn
                          color="primary"
                          className="ms-1"
                          id={Pro.id}
                          onClick={idproduct}
                        >
                          Add to cart{" "}
                          <i className="fas fa-shopping-cart ms-1"></i>
                        </MDBBtn>
                      </form>
                      <div>
                        <MDBBtn
                          color="outline-primary"
                          size="lg"
                          id={Pro.id}
                          onClick={idproduct}
                        >
                          BUY NOW
                        </MDBBtn>
                      </div>
                    </div>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </main>
        </div>
      ))}
    </>
  );
}

export default Productview;

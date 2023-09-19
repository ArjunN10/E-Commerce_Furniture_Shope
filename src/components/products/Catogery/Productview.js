import React, { useContext, useEffect } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBCard,
  MDBInput,
  MDBTypography,
} from "mdb-react-ui-kit";
// import { productsList } from './Productslist';
import { useNavigate, useParams } from "react-router-dom";
import { Mycontext } from "../../../context/Context";
import Nav from "../../Nav";

function Productview() {
  const navigate = useNavigate();
  const { products, addcart, setaddcart, username } = useContext(Mycontext);
  const { id } = useParams();

  const productID = addcart.map((price) => price.id);
  // console.log(productID);
  const productfilter = products.filter((p) => p.id === parseInt(id));
  const idproduct = (e) => {
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
                  <MDBCard
                    style={{
                      boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
                    }}
                  >
                    <img
                      src={Pro.src}
                      className="img-fluid hover-shadow card-img-top "
                      alt="Product"
                    />
                  </MDBCard>
                </MDBCol>

                <MDBCol md="6" mb="4">
                  <MDBCard
                    className="md-6 mb-0"
                    style={{
                      boxShadow:"rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
                    }}
                  >
                    <div className="p-4">
                      <p className="lead">
                        <span className="me-1">
                          <h1>{Pro.name}</h1>
                          <h5>
                            Price :<del>${Pro.price2}</del>
                          </h5>
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
                  <hr />
                  <MDBCard className="mt-0">
                  <MDBContainer className="container exra-imges">
              <MDBRow>
                <MDBCol className=" mt-4 justify-content-center ps-5 "style={{height:"7rem"}}>
                  <img
                   src='https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-returns._CB484059092_.png' 
                   alt="icon"
                   style={{ maxWidth: "50px", maxHeight: "50px" }}
                  />
                  <p>Returns Policy</p>
                </MDBCol>

                <MDBCol className="mt-4 justify-content-center ps-5"style={{height:"7rem"}}>

                  <img 
                   src='https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-warranty._CB485935626_.png' 
                   alt="icon" 
                   style={{ maxWidth: "60px", maxHeight: "60px" }}
                   />
                  <p>1 year warranty</p>

                </MDBCol>

                <MDBCol className="mt-4 justify-content-center ps-5 "style={{height:"7rem"}}>

                  <img className="more-image" 
                   src=' https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-top-brand._CB617044271_.png'  
                   alt="icon" 
                   style={{ maxWidth: "50px", maxHeight: "50px" }}
                   />
                  <p>Top Brand</p>

                </MDBCol>
                <MDBCol className=" mt-4 justify-content-center ps-5"style={{height:"7rem"}}>

                  <img
                   src='https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/Secure-payment._CB650126890_.png'  
                   alt="icon" 
                   style={{ maxWidth: "50px", maxHeight: "50px" }}
                   />
                  <p>Secure transaction</p>

                </MDBCol>
              </MDBRow>
            </MDBContainer>
            </MDBCard>
                  <hr />
                  <MDBTypography className="mt-2 mb-0">
                    <div className="d-flex">
                      <img
                        src="https://img.icons8.com/?size=2x&id=mnqCs95ap07K&format=png"
                        style={{ maxWidth: "30px", maxHeight: "30px" }}
                        alt="offer icon"
                      />
                      <h5 className="ms-2 mt-1">Offers</h5>
                    </div>
                  </MDBTypography>
                  <MDBCard>
                    <div className="container extra-images">
                      <div className="row">
                        <div
                          className="col card mt-2"
                          style={{
                            height: "12rem",
                            boxShadow:
                              "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
                          }}
                        >
                          <div className="pt-3">
                            <h6>Bank Offer</h6>
                            <p>
                              Upto ₹1,500.00 discount on SBI Credit CardsUpto
                              ₹1,500.00 discount on SBI Credit Cards
                            </p>
                          </div>
                        </div>
                        <div
                          className="col card mt-2"
                          style={{
                            height: "12rem",
                            boxShadow:
                              "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
                          }}
                        >
                          <div className="pt-3">
                            <h6>No Cost EMI</h6>
                            <p>
                              Upto ₹3,377.13 EMI interest savings on ICICI
                              Credit Card
                            </p>
                          </div>
                        </div>
                        <div
                          className="col card mt-2"
                          style={{
                            height: "12rem",
                            boxShadow:
                              "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
                          }}
                        >
                          <div className="pt-3">
                            <h6>Partner Offers</h6>
                            <p>
                              Get GST invoice and save up to 28% on business
                              purchases.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </MDBCard>
                  <hr />
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

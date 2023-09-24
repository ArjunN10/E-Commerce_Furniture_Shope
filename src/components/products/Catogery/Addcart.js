import React, { useContext, useState } from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
import { Mycontext } from "../../../context/Context";
import Counter from "../Counter";
import Footer from "../../Footer";

function Addcart() {
  const { addcart, setaddcart } = useContext(Mycontext);
  const navigate = useNavigate();

  const handleBackToShopping = () => {
    navigate("/");
  };

  const removeItem = (itemId) => {
    const updatedCart = addcart.filter((item) => item.id !== itemId);
    setaddcart(updatedCart);
  };

  const [count, setCount] = useState(1);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const totalsum = addcart.map((priceid) => priceid.price2 * priceid.qty);
  const totprice = totalsum.reduce((acc, val) => acc + val, 0);

  return (
    <section className="h-auto h-custom" style={{ backgroundColor: "#eee" }}>
      <MDBContainer className="py-5">
        <MDBRow className="justify-content-center align-items-center">
          <MDBCol lg="7">
            <MDBCard className="shopping-cart" style={{ borderRadius: "15px" }}>
              <MDBCardBody className="text-black">
                <MDBTypography
                  tag="h3"
                  className="mb-4 text-center fw-bold text-uppercase text-decoration-underline"
                >
                  Cart products
                </MDBTypography>

                {addcart.map((item) => (
                  <div className="d-flex align-items-center mb-4" key={item.id}>
                    <div className="flex-shrink-0">
                      <MDBCardImage
                        src={item.src}
                        fluid
                        style={{ maxWidth: "150px" }}
                        alt={item.name}
                      />
                    </div>

                    <div className="flex-grow-1 ms-3">
                      <a
                        href="#!"
                        className="float-end text-black"
                        onClick={() => removeItem(item.id)}
                      >
                        <MDBIcon fas icon="times" />
                      </a>
                      <MDBTypography tag="h5" className="text-primary">
                        {item.name}
                      </MDBTypography>

                      <div className="d-flex align-items-center">
                        <p className="fw-bold mb-0 me-4">Price: ${item.price2}</p>
                        <div className="def-number-input number-input safari_only">
                          <Counter obj={item} />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

          <MDBCol lg="5">
            <form className="mb-4">
              <MDBTypography tag="h5" className="fw-bold mb-4">
                <p className="text-center fw-bold text-uppercase">GRAND TOTAL: ${totprice}</p>
              </MDBTypography>
              <MDBBtn
                onClick={() => navigate("/bill")}
                className="mb-3"
                block
                size="lg"
              >
                Buy now
              </MDBBtn>
              <a href="#!" onClick={handleBackToShopping}>
                <MDBIcon fas icon="angle-left me-2" />
                Back to shopping
              </a>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="mt-3">
        <Footer />
      </div>
    </section>
  );
}

export default Addcart;

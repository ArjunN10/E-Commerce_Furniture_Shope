import React, { useContext, useState } from "react";
import {
        MDBBtn,
        MDBCard,
        MDBCardBody,
        MDBCardImage,
        MDBCol,
        MDBContainer,
        MDBIcon,
        // MDBInput,
        MDBRow,
        MDBTypography,
      } from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
import { Mycontext } from "../../../context/Context";
import Counter from "../Counter";
import Footer from "../../Footer";

function Addcart() {
    const { addcart, setaddcart } = useContext(Mycontext);
    // console.log(itemCount.length);
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
   
    
  
    // const calculateTotal = () => {
    //   return addcart.reduce((total, item) => total + item.price * count, 0);
    // };


  return (
    <section className="h-auto h-custom" style={{ backgroundColor: "#eee" }}>
    <MDBContainer className="h-100 py-5">
      <MDBRow className="justify-content-center align-items-center h-100">
        <MDBCol>
          <MDBCard className="shopping-cart" style={{ borderRadius: "15px" }}>
            <MDBCardBody className="text-black">
              <MDBRow>
                <MDBCol lg="7" className="px-5 py-4">
                  <MDBTypography
                    tag="h3"
                    className="mb-5 pt-2 text-center fw-bold text-uppercase text-decoration-underline"
                  >
                    Cart products
                  </MDBTypography>

                  {addcart.map((item) => (
                    <div
                      className="d-flex align-items-center mb-5"
                      key={item.id}
                    >
                      <div className="flex-shrink-0">
                        <MDBCardImage
                          src={item.src}
                          fluid
                          style={{ width: "150px" }}
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
                          <p className="fw-bold mb-0 me-5 pe-3">
                          Price : ${item.price2}
                          </p>

                          <div className="def-number-input number-input safari_only">
                              <Counter obj={item} />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </MDBCol>
              </MDBRow>

              <MDBRow>
                <MDBCol lg="5" className="px-5 py-4">
                  <form className="mb-5">
                    <MDBTypography
                      tag="h5"
                      className="fw-bold mb-5"
                      style={{ position: "absolute", bottom: "0" }}>
                      <MDBTypography
                    tag="h3"
                    className="mb-2  text-center fw-bold text-uppercase">
                    <p>  GRAND TOTAL:  ${totprice}</p>
                  </MDBTypography>
                      <MDBBtn
                        onClick={() => navigate("/bill")}
                        className=""
                        block
                        size="lg"
                      >
                        Buy now
                      </MDBBtn>

                      <a
                        href="#!"
                        className="m-2"
                        onClick={handleBackToShopping}
                      >
                        <MDBIcon className="pt-4" fas icon="angle-left me-2" />
                        Back to shopping
                      </a>
                    </MDBTypography>
                  </form>
                </MDBCol>
                </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    <div className='mt-3'>
      <Footer/>
     </div>
  </section>
);
}
export default Addcart
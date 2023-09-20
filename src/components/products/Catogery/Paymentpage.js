import React, { useState } from "react";
import {MDBContainer,MDBRow,MDBCol,MDBCard,MDBCardBody,MDBInput,MDBBtn,} from "mdb-react-ui-kit";
import Footer from "../../Footer";

function PaymentPage() {
  const [formData, setFormData] = useState({
    cardNumber: "",
    cardHolder: "",
    expiryDate: "",
    cvv: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({...formData,[name]: value,});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Payment submitted:", formData);
   
  };

  return (
    <>
    <MDBContainer className="my-5">
      <MDBRow className="justify-content-center">
        <MDBCol md="6">
          <MDBCard>
            <MDBCardBody>
              <div className="text-center mb-4">
                <img
                   src={require("../images/logo2.jpg")}  
                  alt="Shop Logo"
                  className="img-fluid"
                  style={{ maxWidth: "100px" }}
                />
              </div>
              <form onSubmit={handleSubmit}>
                <h3 className="text-center mb-4">Payment Details</h3>

                <MDBInput
                  label="Card Number"
                  type="text"
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleInputChange}
                  required
                />

                <MDBInput
                  label="Card Holder Name"
                  type="text"
                  name="cardHolder"
                  value={formData.cardHolder}
                  onChange={handleInputChange}
                  required
                />

                <MDBRow>
                  <MDBCol md="6">
                    <MDBInput
                      label="Expiry Date"
                      type="text"
                      name="expiryDate"
                      value={formData.expiryDate}
                      onChange={handleInputChange}
                      required
                    />
                  </MDBCol>
                  <MDBCol md="6">
                    <MDBInput
                      label="CVV"
                      type="text"
                      name="cvv"
                      value={formData.cvv}
                      onChange={handleInputChange}
                      required
                    />
                  </MDBCol>
                </MDBRow>

                <MDBBtn type="submit" color="primary" className="w-100 mt-4">
                  Submit Payment
                </MDBBtn>
              </form>
            </MDBCardBody>
          </MDBCard>
        <MDBCard className="mb-4 mb-lg-0">
                <MDBCardBody className="justify-content-center">
                  <p>
                    <strong>We accept</strong>
                  </p>
                  <img
                    className="me-2"
                    width="45px"
                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                    alt="Visa"
                  />
                  <img
                    className="me-2"
                    width="45px"
                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
                    alt="American Express"
                  />
                  <img
                    className="me-2"
                    width="45px"
                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                    alt="Mastercard"
                  />
                  <img
                    className="me-2"
                    width="45px"
                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce/includes/gateways/paypal/assets/images/paypal.png"
                    alt="PayPal acceptance mark"
                  />
                </MDBCardBody>
              </MDBCard>
              </MDBCol>
      </MDBRow>
      
    </MDBContainer>
      <div className='mt-3'>
      <Footer/>
     </div>
    </>
  );
}

export default PaymentPage;

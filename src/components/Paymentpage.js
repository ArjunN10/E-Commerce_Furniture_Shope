import React, { useState } from "react";
import {MDBContainer,MDBRow,MDBCol,MDBCard,MDBCardBody,MDBInput,MDBBtn,} from "mdb-react-ui-kit";

function PaymentPage() {
  const [formData, setFormData] = useState({
    cardNumber: "",
    cardHolder: "",
    expiryDate: "",
    cvv: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle payment processing here
    console.log("Payment submitted:", formData);
   
  };

  return (
    <MDBContainer className="my-5">
      <MDBRow className="justify-content-center">
        <MDBCol md="6">
          <MDBCard>
            <MDBCardBody>
              <div className="text-center mb-4">
                <img
                  src="/images/logo.png" // Replace with your shop's logo
                  alt="Shop Logo"
                  className="img-fluid"
                  style={{ maxWidth: "150px" }}
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
        </MDBCol>
      </MDBRow>
      
      {/* <div className="text-center mt-4">
        <img
        src={require("../components/products/images/cover3new.png")} 
        alt="Furniture Shop"
          className="img-fluid"
        />
      </div> */}
    </MDBContainer>
  );
}

export default PaymentPage;
